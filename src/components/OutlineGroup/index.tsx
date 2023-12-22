import Outline from 'components/Outline'
import styles from './index.module.css'
import { useCallback, useState } from 'react'
import OutlineEdit from 'components/OutlineEdit'
import { Button } from 'antd'

interface Props {
  value: any[]
}
const size = 3
const OutlineGroup = (props: Props) => {
  const { value } = props
  const [page, setPage] = useState<number>(1)
  const handlePageChange = useCallback(() => {
    // TODO 超出最大之后重新去调接口数据
    setPage(page + 1)
  }, [page])
  return (
    <div>
      <div className={styles.tip}>
        {'“输入提纲”或选择“推荐提纲”，生成正文。(已根据论文标题为你推荐3组提纲'}
        <Button onClick={handlePageChange}>换一换 </Button>
      </div>
      <div className={styles.group}>
        <OutlineEdit />
        {value.slice((page - 1) * size, page * size).map((item, index) => (
          <Outline key={index} value={item.outline}></Outline>
        ))}
      </div>
    </div>
  )
}
export default OutlineGroup
