import Head from 'next/head'

import DTable from '../features/dtable/DTable'
import styles from '../styles/Home.module.css'

const IndexPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>D Table</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <DTable></DTable>
    </div>
  )
}

export default IndexPage
