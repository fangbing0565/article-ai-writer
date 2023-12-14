import Outline from 'components/Outline'
import styles from './index.module.css'

interface Props {
  value: any[]
}
const OutlineGroup = (props: Props) => {
  const { value } = props
  return (
    <div>
      <div className={styles.tip}>
        {'“输入提纲”或选择“推荐提纲”，生成正文。(已根据论文标题为你推荐3组提纲'}
      </div>
      <div className={styles.group}>
        {value.map((val, index) => (
          <Outline key={index} value={val}></Outline>
        ))}
      </div>
    </div>
  )
}
export default OutlineGroup
