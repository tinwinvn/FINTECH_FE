import React, { useRef, useEffect, useState, useCallback } from "react";

export type TruncateTooltipProps = {
  text: string;
  children: React.ReactElement<React.HTMLAttributes<HTMLElement>>;
};

export const TruncateTooltip = ({ text, children }: TruncateTooltipProps) => {
  const ref = useRef<HTMLElement>(null);
  const [isTruncated, setIsTruncated] = useState(false);

  const checkTruncation = useCallback(() => {
    const el = ref.current;
    if (!el) return;

    const isHorizontalOverflow = el.scrollWidth > el.clientWidth;
    const isVerticalOverflow = el.scrollHeight > el.clientHeight;

    setIsTruncated(isHorizontalOverflow || isVerticalOverflow);
  }, []);

  useEffect(() => {
    checkTruncation();

    const observer = new ResizeObserver(checkTruncation);
    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [checkTruncation, text]);

  return React.cloneElement<any>(children, {
    ref,
    title: isTruncated ? text : undefined,
  });
};
