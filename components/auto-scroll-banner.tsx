// components/InfiniteScrollBanner.tsx
import React, { ReactNode } from "react";

interface InfiniteScrollBannerProps {
  children: ReactNode;
  speed?: "slow" | "normal" | "fast";
}

const InfiniteScrollBanner = ({
  children,
  speed = "normal",
}: InfiniteScrollBannerProps) => {
  const duration = {
    slow: "40s",
    normal: "30s",
    fast: "20s",
  }[speed];
  const childrenArray = React.Children.toArray(children);

  return (
    <div
      className="overflow-hidden max-w-4xl outline-lime-500 outline outline-4 [mask-image:_linear-gradient(to_right,transparent_0,_black_20%,_black_80%,transparent_100%)]
"
    >
      <div
        className="flex items-center w-max gap-[var(--item-gap)] py-4 animate-marquee"
        style={
          {
            "--marquee-speed": duration,
            "--item-gap": "4rem",
          } as React.CSSProperties
        }
      >
        {[...childrenArray, ...childrenArray].map((child, index) => (
          <div
            key={index}
            className="flex-shrink-0"
            aria-hidden={index >= childrenArray.length}
          >
            {child}
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteScrollBanner;
