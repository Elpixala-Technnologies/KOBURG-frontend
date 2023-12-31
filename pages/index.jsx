import Home from '@/src/Components/Home/Home/Home'
import RootLayout from '@/src/Layouts/RootLayout'
import Head from 'next/head'


export default function HomePage() {
  return (
    <>
      <Head>
        <title>Koburg</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicons.jpeg" />
      </Head>
      <main>
        <RootLayout>
          <Home />
        </RootLayout>
      </main>
    </>
  )
}
