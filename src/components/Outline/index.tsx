import { useCallback, useState } from 'react'
import styles from './index.module.css'
import Editor from 'rich-markdown-editor'
import { Button } from 'antd'
import { tansferDatatoRickValue } from 'utils/tools'

interface Props {
  value: any
}
const Outline = (props: Props) => {
  const { value } = props
  const [outlineValue, setOutlineValue] = useState<string>()
  const [outlineDefaultValue, setOutlineDefaultValue] = useState(tansferDatatoRickValue(value))
  const handleChange = (val: () => string) => {
    setOutlineValue(val)
  }
  const handleSave = useCallback(() => {
    setOutlineDefaultValue(outlineValue)
    console.info('outlineValue: ', outlineValue)
  }, [outlineValue])
  return (
    <div className={styles.wrapper}>
      <div className={styles.box}>
        <div className={styles.editor}>
          <Editor
            onBlur={handleSave}
            onChange={handleChange}
            defaultValue={outlineDefaultValue}
            embeds={[]}
          />
        </div>
        <div className={styles.btns}>
          <div className={styles.tip}>论文字数：约{'14400'}字</div>
          <Button>取消</Button>
          <Button type="primary">ai生成</Button>
        </div>
      </div>
    </div>
  )
}
export default Outline
