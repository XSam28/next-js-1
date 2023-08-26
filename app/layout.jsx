import './globals.css'
import { Suspense } from 'react'
import Loading from './loading'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import { Montserrat } from 'next/font/google'
import { Toaster } from 'react-hot-toast'

const inter = Montserrat({
  subsets: ["latin"],
  weight: ['400']
});

export const metadata = {
  title: 'SPACE_BLOG',
  description: 'Look Up',
}

export default function RootLayout({children}) 
{
  return (
    <html lang="en" className={inter.className}>
      <body className='bg-black selection:bg-black'>
        <div
        className='min-h-[100vh] flex flex-col justify-between'>
          <div><Toaster/></div>
        <Header />
      {children}
      <Suspense fallback={ <Loading /> }></Suspense>
      <Footer/>
      </div>
      </body>
    </html>
  )
}

