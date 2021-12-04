import Head from 'next/head'

import DTable from '../features/dtable/DTable'
import styles from '../styles/Home.module.css'
import { useGetBlockByIdAndTypeQuery } from '../features/slice/httpSlice'


const IndexPage = () => {
  const {
    data: block_real,
  } = useGetBlockByIdAndTypeQuery(
    {
      block_id: '1637203260626.1',
      type:'block_real',
      sort: {"__row_order": 1}
    });
  const {
    data: block_meta,
  } = useGetBlockByIdAndTypeQuery(
    {
      block_id: '1637203260626.1',
      type:'block_meta',
      // TODO MongoDB $unwind resort
      // sort: {"columns.order": 1}
    });

  console.log(block_real, block_meta)

  return (
    <div className={styles.container}>
      <Head>
        <title>D Table</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <DTable meta={block_meta} real={block_real}></DTable>
    </div>
  )
}

export default IndexPage
