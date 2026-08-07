"use client";

import {
  forwardRef,
  type ReactNode,
  type TextareaHTMLAttributes,
} from "react";

import { textareaVariants } from "./textareaVariants";
import { cn } from "@/lib/utils";

export interface TextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  helperText?: string;
  error?: string;
  variant?: "default" | "filled" | "flushed";
  size?: "sm" | "md" | "lg";
  resize?: "none" | "vertical" | "horizontal" | "both";
  startIcon?: ReactNode;
  endIcon?: ReactNode;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      label,
      helperText,
      error,
      variant,
      size,
      resize = "vertical",
      startIcon,
      endIcon,
      className,
      ...props
    },
    ref,
  ) => {
    return (
      <div className="w-full">
        {label && (
          <label className="mb-2 block text-sm text-dark">
            {label}
          </label>
        )}

        <div className="relative">
          {startIcon && (
            <span className="pointer-events-none absolute right-3 top-3 text-gray-3">
              {startIcon}
            </span>
          )}

          <textarea
            ref={ref}
            className={cn(
              textareaVariants({
                variant,
                size,
                resize,
                error: !!error,
              }),
              startIcon && "pr-10",
              endIcon && "pl-10",
              className,
            )}
            {...props}
          />

          {endIcon && (
            <span className="pointer-events-none absolute left-3 top-3 text-gray-3">
              {endIcon}
            </span>
          )}
        </div>

        {error ? (
          <p className="mt-1 text-sm text-red-500">{error}</p>
        ) : (
          helperText && (
            <p className="text-gray-3 mt-1 text-sm">{helperText}</p>
          )
        )}
      </div>
    );
  },
);

Textarea.displayName = "Textarea";