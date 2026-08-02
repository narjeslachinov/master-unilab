import localFont from "next/font/local";

export const vazir = localFont({
  src: [
    {
      path: "./vazir/Vazir.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./vazir/Vazir-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./vazir/Vazir-Light.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./vazir/Vazir-Medium.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./vazir/Vazir-Thin.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./vazir/Farsi-Digits-Without-Latin/Vazir-FD-WOL.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./vazir/Farsi-Digits-Without-Latin/Vazir-Bold-FD-WOL.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-vazir",
  display: "swap",
});

export const aviny = localFont({
  src: [
    {
      path: "./aviny/aviny.woff",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-aviny",
  display: "swap",
});
