import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  ) 
}

const Header = () => {
  return <header>
    <h1>Test</h1>
  </header>
}

const Footer = () => {
  return (
    <footer>
      <h1>Footer</h1>
    </footer>
  )
}