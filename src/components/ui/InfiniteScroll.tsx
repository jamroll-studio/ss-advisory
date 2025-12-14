'use client';

import React, { useEffect, useRef, useCallback } from 'react';
import { gsap } from 'gsap';

interface InfiniteScrollProps {
  children: React.ReactNode;
  speed?: number;
  direction?: 'left' | 'right';
  className?: string;
  pauseOnHover?: boolean;
  disableInfinite?: boolean; // Option to disable infinite looping
}

const InfiniteScroll: React.FC<InfiniteScrollProps> = ({
  children,
  speed = 50,
  direction = 'left',
  className = '',
  pauseOnHover = false,
  disableInfinite = false,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);
  const resizeObserverRef = useRef<ResizeObserver | null>(null);
  const resizeTimeoutRef = useRef<number | null>(null);

  const setupAnimation = useCallback(() => {
    if (!containerRef.current || !contentRef.current) return;

    const content = contentRef.current;
    
    // Kill existing timeline
    if (timelineRef.current) {
      timelineRef.current.kill();
    }

    // Get content width for seamless looping.
    // Mobile Safari can report 0/unstable scrollWidth briefly after mount, so prefer the first child width when available.
    const firstTrack = content.children.item(0) as HTMLElement | null;
    const firstTrackWidth = firstTrack?.scrollWidth ?? 0;
    const scrollWidthHalf = content.scrollWidth / 2; // Divide by 2 because we duplicate content
    const contentWidth = Math.max(firstTrackWidth, scrollWidthHalf);
    if (!Number.isFinite(contentWidth) || contentWidth <= 0) return;

    gsap.set(content, { x: 0, force3D: true });
    
    // Set up GSAP timeline for scroll (infinite or one-time)
    timelineRef.current = gsap.timeline({ repeat: disableInfinite ? 0 : -1 });
    
    const duration = contentWidth / speed;
    const xMovement = direction === 'left' ? -contentWidth : contentWidth;
    
    timelineRef.current.to(content, {
      x: xMovement,
      duration,
      ease: 'none',
      force3D: true,
    });

    // Reset position for seamless loop
    timelineRef.current.set(content, { x: 0 });
  }, [speed, direction, disableInfinite]);

  const handleResize = useCallback(() => {
    if (resizeTimeoutRef.current) {
      window.clearTimeout(resizeTimeoutRef.current);
    }

    // Small delay to ensure DOM (and images) have updated
    resizeTimeoutRef.current = window.setTimeout(() => {
      setupAnimation();
    }, 100);
  }, [setupAnimation]);

  useEffect(() => {
    const content = contentRef.current;
    if (!content) return;
    
    setupAnimation();

    // One extra pass after first paint (helps Mobile Safari layout timing)
    const rafId = window.requestAnimationFrame(() => {
      setupAnimation();
    });

    // Another delayed pass (helps when images/fonts settle a bit later on iOS Safari)
    const timeoutId = window.setTimeout(() => {
      setupAnimation();
    }, 250);

    // Set up ResizeObserver for responsive handling
    if (typeof ResizeObserver !== 'undefined') {
      resizeObserverRef.current = new ResizeObserver(handleResize);
      if (containerRef.current) resizeObserverRef.current.observe(containerRef.current);
      // Observe content as well, since images can change scrollWidth without changing container width
      resizeObserverRef.current.observe(content);
    }

    // Recompute once images inside content finish loading
    const imgs = Array.from(content.querySelectorAll('img'));
    const onImgLoad = () => handleResize();
    imgs.forEach((img) => {
      if (!img.complete) img.addEventListener('load', onImgLoad, { once: true });
    });

    // Window resize fallback
    window.addEventListener('resize', handleResize);

    return () => {
      if (timelineRef.current) {
        timelineRef.current.kill();
      }
      if (resizeObserverRef.current) {
        resizeObserverRef.current.disconnect();
      }
      if (resizeTimeoutRef.current) {
        window.clearTimeout(resizeTimeoutRef.current);
      }
      window.removeEventListener('resize', handleResize);
      window.cancelAnimationFrame(rafId);
      window.clearTimeout(timeoutId);
      imgs.forEach((img) => img.removeEventListener('load', onImgLoad));
    };
  }, [setupAnimation, handleResize]);

  const handleMouseEnter = useCallback(() => {
    if (pauseOnHover && timelineRef.current) {
      timelineRef.current.pause();
    }
  }, [pauseOnHover]);

  const handleMouseLeave = useCallback(() => {
    if (pauseOnHover && timelineRef.current) {
      timelineRef.current.resume();
    }
  }, [pauseOnHover]);

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden w-full ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        ref={contentRef}
        className="flex w-max will-change-transform transform-gpu"
      >
        {/* Original content */}
        <div className="flex shrink-0">{children}</div>
        {/* Duplicated content for seamless loop */}
        <div className="flex shrink-0">{children}</div>
      </div>
    </div>
  );
};

export default InfiniteScroll;
export type { InfiniteScrollProps };