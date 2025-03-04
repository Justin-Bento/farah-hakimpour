import type { Metadata } from "next";
import "@/app/globals.css";

export const metadata: Metadata = {
  title: 'Farah Hakimpour',
  description: 'A Graphic Designer and Illustrator based in Toronto, Ontario. Explore her digital portfolio and discover her creative process.',
  icons: {
    icon: [
      {
        media: '(prefers-color-scheme: light)',
        url: '/media/favicon.ico',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}