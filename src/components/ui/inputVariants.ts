import { cva } from "class-variance-authority";

export const inputVariants = cva(
  [
    "customeSmallText",

    "w-full",

    "border",

    "outline-none",

    "transition-all",
    "duration-300",

    "placeholder:text-gray-2",

    "focus:ring-2",

    "focus:ring-accent-1",

    "focus:border-accent-1",

    "disabled:cursor-not-allowed",
    "disabled:opacity-50",

    "read-only:bg-gray-100",
  ].join(" "),
  {
    variants: {
      variant: {
        default: ["bg-white", "border-gray-1", "text-dark"].join(" "),

        filled: ["text-gray-2", "border-transparent", "focus:bg-white"].join(
          " ",
        ),

        flushed: [
          "rounded-none",
          "border-x-0",
          "border-t-0",
          "border-b",
          "bg-transparent",
        ].join(" "),
      },

      radius: {
        md: "rounded-lg",

        full: "rounded-full",

        none: "rounded-none",
      },

      size: {
        sm: "h-9 px-3 text-sm",

        md: "h-10 px-4 text-sm",

        lg: "h-12 px-4 text-base",
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

      radius: "full",

      error: false,
    },
  },
);
