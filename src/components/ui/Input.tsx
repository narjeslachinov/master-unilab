"use client";

import { forwardRef, type InputHTMLAttributes, type ReactNode } from "react";

import { inputVariants } from "./inputVariants";
import { cn } from "@/lib/utils";

export interface InputProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "size"
> {
  label?: string;

  helperText?: string;

  error?: string;

  startIcon?: ReactNode;

  endIcon?: ReactNode;

  variant?: "default" | "filled" | "flushed";

  size?: "sm" | "md" | "lg";
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      helperText,
      error,
      startIcon,
      endIcon,
      className,
      variant,
      size,
      ...props
    },
    ref,
  ) => {
    return (
      <div className="flex w-full flex-col gap-2">
        {label && <label className="text-sm font-medium">{label}</label>}

        <div className="relative">
          {startIcon && (
            <span className="text-gray-3 pointer-events-none absolute inset-y-0 right-3 flex items-center">
              {startIcon}
            </span>
          )}

          <input
            ref={ref}
            className={cn(
              inputVariants({
                variant,
                size,
                error: !!error,
              }),

              startIcon && "pr-10",

              endIcon && "pl-10",

              className,
            )}
            {...props}
          />

          {endIcon && (
            <span className="text-gray-3 pointer-events-none absolute inset-y-0 left-3 flex items-center">
              {endIcon}
            </span>
          )}
        </div>

        {error ? (
          <p className="text-sm text-red-500">{error}</p>
        ) : (
          helperText && <p className="text-gray-3 text-sm">{helperText}</p>
        )}
      </div>
    );
  },
);

Input.displayName = "Input";
