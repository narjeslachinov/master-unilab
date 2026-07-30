import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  [
    "inline-flex",
    "items-center",
    "justify-center",
    "gap-2",
    "whitespace-nowrap",

    "rounded-lg",
    "border-2",

    "font-normal",
    "leading-[1.4]",

    "transition-all",
    "duration-400",
    "ease-in-out",

    "focus-visible:outline-none",
    "focus-visible:ring-2",
    "focus-visible:ring-primary",

    "disabled:pointer-events-none",
    "disabled:opacity-50",
  ].join(" "),
  {
    variants: {
      variant: {
        primary: [
          "bg-primary",
          "text-light",
          "border-primary",

          "hover:bg-neutral-1",
          "hover:text-primary",
        ].join(" "),

        secondary: [
          "bg-primary",
          "text-light",
          "border-primary",

          "hover:bg-neutral-1",
          "hover:text-primary",
        ].join(" "),

        outline: [
          "bg-primary",
          "text-light",
          "border-primary",

          "hover:bg-neutral-1",
          "hover:text-primary",
        ].join(" "),

        ghost: [
          "bg-primary",
          "text-light",
          "border-primary",

          "hover:bg-neutral-1",
          "hover:text-primary",
        ].join(" "),

        danger: [
          "bg-primary",
          "text-light",
          "border-primary",

          "hover:bg-neutral-1",
          "hover:text-primary",
        ].join(" "),
      },

      size: {
        sm: "px-2 py-1 text-xs",

        md: "px-3 py-1.5 text-sm",

        lg: "px-5 py-2 text-base",

        icon: "h-10 w-10 p-0",
      },

      fullWidth: {
        true: "w-full",
        false: "",
      },
    },

    defaultVariants: {
      variant: "primary",
      size: "md",
      fullWidth: false,
    },
  },
);
