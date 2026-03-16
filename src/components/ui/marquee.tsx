"use client";
import React, { useRef, useEffect, useCallback } from "react";

// cn utility function (similar to clsx or classnames)
function cn(...classes: (string | boolean | undefined | null)[]): string {
  return classes.filter(Boolean).join(" ");
}

const useAnimationFrame = (callback: (time: number, delta: number) => void) => {
  const requestRef = useRef<number | null>(null);
  const previousTimeRef = useRef<number | null>(null);

  const animate = useCallback(
    (time: number) => {
      if (
        previousTimeRef.current !== null &&
        previousTimeRef.current !== undefined
      ) {
        const delta = time - previousTimeRef.current;
        callback(time, delta);
      }
      previousTimeRef.current = time;
      requestRef.current = requestAnimationFrame(animate);
    },
    [callback]
  );

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [animate]);
};

interface MarqueeProps extends React.ComponentPropsWithoutRef<"div"> {
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  children: React.ReactNode;
  speed?: number;
  vertical?: boolean;
  repeat?: number;
}

function Marquee({
  className,
  reverse = false,
  pauseOnHover = false,
  children,
  speed = 50,
  vertical = false,
  repeat = 4,
  ...props
}: MarqueeProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const singleContentBlockRef = useRef<HTMLDivElement | null>(null);
  const animX = useRef<number>(0);
  const isPaused = useRef<boolean>(false);

  const loopDistanceRef = useRef<number>(0);
  const resizeObserverRef = useRef<ResizeObserver | null>(null);

  const updateLoopDistance = useCallback(() => {
    if (!singleContentBlockRef.current || !contentRef.current) return;

    const singleContentBlockSize = vertical
      ? singleContentBlockRef.current.offsetHeight
      : singleContentBlockRef.current.offsetWidth;

    const contentStyle = window.getComputedStyle(contentRef.current);
    const computedGap = parseFloat(
      vertical ? contentStyle.rowGap || "0" : contentStyle.columnGap || "0"
    );
    loopDistanceRef.current = singleContentBlockSize + computedGap;
  }, [vertical]);

  useEffect(() => {
    updateLoopDistance();

    if (containerRef.current) {
      resizeObserverRef.current = new ResizeObserver(() => {
        updateLoopDistance();
      });
      resizeObserverRef.current.observe(containerRef.current);
    }

    return () => {
      if (resizeObserverRef.current) {
        resizeObserverRef.current.disconnect();
      }
    };
  }, [updateLoopDistance]);

  useAnimationFrame((t, delta) => {
    if (!contentRef.current || loopDistanceRef.current === 0) return;

    if (pauseOnHover && isPaused.current) {
      return;
    }

    const dx = (speed * delta) / 1000;
    const effectiveDx = reverse ? dx : -dx;
    animX.current += effectiveDx;

    if (Math.abs(animX.current) >= loopDistanceRef.current) {
      animX.current = animX.current % loopDistanceRef.current;
    }

    // Use transform3d for GPU acceleration
    const transform = vertical 
      ? `translate3d(0, ${animX.current}px, 0)` 
      : `translate3d(${animX.current}px, 0, 0)`;
      
    contentRef.current.style.transform = transform;
  });

  const handleMouseEnter = useCallback(() => {
    if (pauseOnHover) {
      isPaused.current = true;
    }
  }, [pauseOnHover]);

  const handleMouseLeave = useCallback(() => {
    if (pauseOnHover) {
      isPaused.current = false;
    }
  }, [pauseOnHover]);

  return (
    <div
      {...props}
      ref={containerRef}
      className={cn(
        "group flex overflow-hidden p-2 [--gap:2rem] [gap:var(--gap)]" +
          (vertical ? " flex-col" : " flex-row"),
        className
      )}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        ref={contentRef}
        className={cn(
          "flex shrink-0 justify-around [gap:var(--gap)]" +
            (vertical ? " flex-col" : " flex-row")
        )}
      >
        {Array(repeat)
          .fill(0)
          .map((_, i) => (
            <div
              key={i}
              ref={i === 0 ? singleContentBlockRef : null}
              className="flex gap-8"
            >
              {children}
            </div>
          ))}
      </div>
    </div>
  );
}

export default Marquee;
