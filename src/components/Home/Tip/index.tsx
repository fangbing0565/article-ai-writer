import styles from './index.module.css'
import { Flex } from 'antd'
const Tip = () => {
  return (
    <Flex className={styles.tip}>
      <img height={50} alt="Picture of the left" src="/img/bg_left.png" />
      <Flex align="center">
        <img height={50} alt="Picture of the tip" src="/img/tip_icon.png" />
        <span className={styles.tip_text}>你只负责输入标题，写论文的这些时间，小微来帮你节省</span>
      </Flex>
      <img height={50} alt="Picture of the right" src="/img/bg_right.png" />
    </Flex>
  )
}

export default Tip
