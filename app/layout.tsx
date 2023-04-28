import './globals.css'
import {Nunito} from 'next/font/google'
import {Navbar} from "@/app/components/Navbar";
import {Modal} from "@/app/components/Modal";

const nunito = Nunito({ subsets: ['latin'] })

export const metadata = {
  title: 'AirBnB',
  description: 'AirBnB clone',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <Modal />
        <Navbar />
        {children}
      </body>
    </html>
  )
}
