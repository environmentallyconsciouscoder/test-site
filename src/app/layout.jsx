import RootLayout from "@/components/RootLayout";
import "./globals.css";
import localFont from "next/font/local";

export const metadata = {
  title: {
    template: "RetroSet Website",
    default: "RetroSet Website",
  },
};

const myFont = localFont({
  src: [
    {
      path: '../fonts/Nohemi-Regular-BF6438cc579d934.woff',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/Nohemi-Light-BF6438cc5702321.woff',
      weight: '300',
      style: 'light',
    },
    {
      path: '../fonts/Nohemi-ExtraLight-BF6438cc581502c.woff',
      weight: '200',
      style: 'extra light',
    },
    {
      path: '../fonts/Nohemi-Thin-BF6438cc57e2011.woff',
      weight: '100',
      style: 'thin',
    },
  ],
})

export default function Layout({ children }) {
  return (
    <html
      lang="en"
      className="h-full bg-white text-base antialiased text-neutral-100"
    >
      <head>
        <link rel="icon" href="/favicon.ico" />
        <title>RetroSet Website</title>
      </head>

      <body className={`${myFont.className} flex min-h-full flex-col text-white`}>
        <RootLayout>{children}</RootLayout>
      </body>

    </html>
  );
}
