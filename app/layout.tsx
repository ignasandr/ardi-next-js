import { Roboto, Lato } from 'next/font/google'
import Header from '../components/Header/Header'
import './globals.css'

const roboto = Roboto({
  weight: ["400", "700"],
  variable: '--font-body',
  subsets: ['latin-ext']
})

const lato = Lato({
  weight: "400",
  variable: '--font-head',
  subsets: ['latin-ext']
})

export default function RootLayout({ children }: {children: React.ReactNode;}) {
  return (
    <html lang="en" className={`${roboto.variable} ${lato.variable}`}>
        <body>
          <Header />
          {children}
        </body>
    </html>
  );
}