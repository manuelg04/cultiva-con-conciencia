import '../styles/globals.css';
import { Tenor_Sans, Rubik } from 'next/font/google';

const tenorSans = Tenor_Sans({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

const rubik = Rubik({
  weight: '300',
  subsets: ['latin'],
  display: 'swap',
});

export default function MyApp({ Component, pageProps }) {
  return (
    <main className={`${tenorSans.className} ${rubik.className}`}>
      <Component {...pageProps} />
    </main>
  );
}
