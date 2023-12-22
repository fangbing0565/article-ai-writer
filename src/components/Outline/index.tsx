import { useState } from 'react'
import styles from './index.module.css'
import Editor from 'rich-markdown-editor'
import { Button } from 'antd'

const tansferDatatoRickValue = (outline: Record<string, any>) => {
  return outline
    .map((item: any) => {
      console.info('outline item: ', item)
      return (
        item.content_original +
        '/n' +
        (!item.sub ? '' : item.sub?.map((sub: any) => sub.content_original).join('/n'))
      )
    })
    .join('/n')
}
interface Props {
  value: any
}
const Outline = (props: Props) => {
  const { value } = props
  const [outlineValue, setOutlineValue] = useState(tansferDatatoRickValue(value))
  const handleChange = (val: () => string) => {
    console.log('handleChange: ', val)
    setOutlineValue(val)
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.box}>
        <div className={styles.editor}>
          <Editor onChange={handleChange} value={outlineValue} />
        </div>
        <div className={styles.btns}>
          <Button>取消修改</Button>
          <Button type="primary">ai生成正文</Button>
        </div>
      </div>
    </div>
  )
}
export default Outline
