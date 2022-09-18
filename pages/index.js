import Head from 'next/head'
import Featuredwork from '../components/Featuredwork'
import Profilesection from '../components/Profilesection'
import Recentpost from '../components/Recentpost'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Parentune Assignment</title>
        <meta name="blog" content="assignemt for parentune" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {/*================================Profile info section================================ */}
        <Profilesection />

        {/* ===============================recent post section ========================================= */}
        <Recentpost />

        {/* ===============================Featured work section ========================================= */}
        <Featuredwork />

      </main >
    </div >
  )
}
