import type { NextPage } from 'next'
import Head from 'next/head'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Main from '../components/Main'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Sambl - RPG App</title>
      </Head>
      <Header buttons />
      <Main />
      <Footer />
    </>
  )
}

export default Home
