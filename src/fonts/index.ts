import localFont from "next/font/local";
export const iranSans = localFont({
  src: [
    {
      path: "./IRANSANSWEBFANUM.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./IRANSANSWEBFANUM_MEDIUM.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./IRANSANSWEBFANUM_BOLD.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-iransans",
  display: "swap",
});
