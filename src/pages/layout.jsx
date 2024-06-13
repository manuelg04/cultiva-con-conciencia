// This is the root layout component for your Next.js app.
// Learn more: https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#root-layout-required

import { Tenor_Sans } from 'next/font/google'
import { Rubik } from 'next/font/google'
import './styles.css'

const tenor_sans = Tenor_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-tenor_sans',
})
const rubik = Rubik({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-rubik',
})

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body className={tenor_sans.variable + ' ' + rubik.variable}>
        {children}
      </body>
    </html>
  )
}