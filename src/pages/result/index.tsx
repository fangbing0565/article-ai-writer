import Tip from 'components/Home/Tip'
import Layout from 'components/Layout'
import styles from './index.module.css'
import { LeftOutlined } from '@ant-design/icons'
const Result = () => {
  return (
    <Layout title="提交论文标题">
      <Tip />
      <div className={styles['content-box']}>
        <div className={styles['order-top']}>
          <div className={styles['order-top-back']}>
            <LeftOutlined rev={''} />
            返回提交页
          </div>
          <div className={styles['top-title']}>查询结果</div>
        </div>
      </div>
    </Layout>
  )
}

export default Result
