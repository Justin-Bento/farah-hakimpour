import { SanityLive } from '@/sanity/lib/live'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function FrontendLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <Navigation />
      {children}
      <SanityLive />
      <Footer />
    </>
  )
}