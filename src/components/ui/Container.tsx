import * as React from "react";

import { cn } from "@/lib/utils";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "md" | "lg" | "xl" | "full";
}

export function Container({
  className,
  size = "full",
  children,
  ...props
}: ContainerProps) {
  const sizes = {
    sm: "max-w-lg",
    md: "max-w-xl",
    lg: "max-w-2xl",
    xl: "max-w-7xl",
    full: "max-w-full",
  };

  return (
    <div
      className={cn(
        "mx-auto w-full px-4 sm:px-6 lg:px-36",
        sizes[size],
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
