import { useState } from 'react'
import styles from './index.module.css'
import Editor from 'rich-markdown-editor'

interface Props {
  value: any
}
const Outline = (props: Props) => {
  const { value } = props
  const [outlineValue, setOutlineValue] = useState(value)
  const handleChange = (val: () => string) => {
    console.log('handleChange: ', val)
    setOutlineValue(val)
  }

  return <Editor className={styles.box} onChange={handleChange} value={outlineValue} />
}
export default Outline
