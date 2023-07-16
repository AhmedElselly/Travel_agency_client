import Navbar from '@/components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import '@/styles/globals.css';
import { theme } from '@/utils/theme'
import { ThemeProvider } from '@mui/material'
import type { AppProps } from 'next/app'
import { Fragment } from 'react'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
