import './globals.css'
import type { Metadata } from 'next'
import { Suspense } from 'react'
import Loading from './loading'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import { Roboto } from 'next/font/google'

const inter = Roboto({
  subsets: ["latin"],
  weight: '700'
});

export const metadata: Metadata = {
  title: 'SPACE_BLOG',
  description: 'Look Up',
}

export default function RootLayout({children}: {children: React.ReactNode}) 
{
  return (
    
    <html lang="en" className={inter.className}>
      <body className='bg-black selection:bg-black'>
        <div className='min-h-[100vh] flex flex-col justify-between'>
        <Header />
      {children}
      <Suspense fallback={ <Loading /> }></Suspense>
      <Footer/>
      </div>
      </body>
    </html>
  )
}

