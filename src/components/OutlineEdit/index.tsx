import { useState } from 'react'
import styles from './index.module.css'
import Editor from 'rich-markdown-editor'
import { Button, Tag } from 'antd'
import { QuestionCircleOutlined } from '@ant-design/icons'

const OutlineEdit = () => {
  const [outlineValue, setOutlineValue] = useState<string>()
  const handleChange = (val: () => string) => {
    console.log('handleChange: ', val)
    setOutlineValue(val)
  }
  return (
    <div className={styles.wrapper}>
      <div className={styles.box}>
        <div className={styles.title}>
          <QuestionCircleOutlined rev={''} />
          提纲编辑区
        </div>
        <div className={styles.content}>
          提纲编辑区： <Tag>tab</Tag>/ <Tag>shift</Tag> <Tag>tab</Tag>可切换提纲级别
        </div>
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
export default OutlineEdit
