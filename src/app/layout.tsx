import "@/app/globals.css";
import type { Metadata } from "next";
import { GoogleAnalytics } from '@next/third-parties/google'
import { ThemeProvider } from "@/components/theme-provider"
import { Raleway } from 'next/font/google'

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

const raleway = Raleway({
  subsets: ['latin'],
  weight: 'variable'
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${raleway}`}>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
      <GoogleAnalytics gaId={`${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`} />
    </html>
  );
}