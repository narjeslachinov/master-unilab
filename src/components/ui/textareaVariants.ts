import { cva } from "class-variance-authority";

export const textareaVariants = cva(
  [
    "customSmallText",
    "w-full",
    "border",
    "rounded-lg",
    "outline-none",
    "transition-all",
    "duration-300",
    "placeholder:text-gray-2",
    "focus:ring-1",
    "focus:ring-accent-1",
    "focus:border-accent-1",
    "disabled:cursor-not-allowed",
    "disabled:opacity-50",
    "read-only:bg-gray-100",
  ].join(" "),
  {
    variants: {
      variant: {
        default: [
          "bg-white",
          "border-gray-1",
          "text-dark",
        ].join(" "),

        filled: [
          "bg-gray-100",
          "text-gray-2",
          "border-transparent",
          "focus:bg-white",
        ].join(" "),

        flushed: [
          "rounded-none",
          "border-x-0",
          "border-t-0",
          "border-b",
          "bg-transparent",
        ].join(" "),
      },

      size: {
        sm: "min-h-24 px-3 py-2 text-sm",

        md: "min-h-32 px-4 py-3 text-sm",

        lg: "min-h-40 px-4 py-3 text-base",
      },

      resize: {
        none: "resize-none",

        vertical: "resize-y",

        horizontal: "resize-x",

        both: "resize",
      },

      error: {
        true: [
          "border-red-500",
          "focus:ring-red-500",
          "focus:border-red-500",
        ].join(" "),

        false: "",
      },
    },

    defaultVariants: {
      variant: "default",
      size: "md",
      resize: "vertical",
      error: false,
    },
  },
);