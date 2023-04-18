import { Roboto, Lato } from 'next/font/google'

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

export default function Layout({ children }: {children: React.ReactNode;}) {
  return (
    <html lang="en" className={`${roboto.variable} ${lato.variable}`}>
        <body>
          {children}
        </body>
    </html>
  );
}