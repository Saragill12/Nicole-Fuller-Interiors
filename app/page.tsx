import Head from 'next/head'
import HorizontalScroll from '../app/components/HorizontalScroll'

export default function Home() {
  return (
    <>
      <Head>
        <title>Slides - Horizontal Scroll Landing Page</title>
        <meta name="description" content="Horizontal scroll landing page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main>

        <HorizontalScroll />
      </main>
    </>
  )
}