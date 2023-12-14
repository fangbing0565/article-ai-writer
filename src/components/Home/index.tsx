import { Button, Flex, Form, Select, Input, Radio } from 'antd'
import Layout from '../../components/Layout'
import { NextPage } from 'next'
import Tip from 'components/Home/Tip'
import styles from './index.module.css'
import { useCallback, useEffect, useState } from 'react'
import { postGenerateService } from 'utils'
import { useRouter } from 'next/navigation'
import { getUrlParams } from 'utils/tools'
import OutlineGroup from 'components/OutlineGroup'

const options: any[] = [
  { value: '1', label: '毕业论文' },
  { value: '2', label: '开题报告' }
]
const articleTypeTextMap: any = {
  1: '毕业论文',
  2: '开题报告'
}
const degreeTextMap: any = {
  1: '大专生',
  2: '本科生',
  3: '研究生'
}
const Home: NextPage = () => {
  const [form] = Form.useForm()
  const route = useRouter()
  const [articleType, setArticleType] = useState<string>(options[0].value)
  const [isFirstLoad, setIsFirstLoad] = useState<boolean>(true)
  const [step, setStep] = useState(1)
  const [content, setContent] = useState('')
  const [outlineValue, setOutlineValue] = useState([])

  const changeArticleType = (value: string) => {
    setArticleType(value)
  }

  const handleSubmit = useCallback(
    async (values: any) => {
      setContent(values.content)
      console.info('values: ', values, articleType)
      route.replace(`?articleType=${articleType}&content=${values.content}&degree=${values.degree}`)
      const res = await postGenerateService({
        content: `以《${values.content}》为标题来写一篇${degreeTextMap[values.degree]}${
          articleTypeTextMap[articleType]
        }的大纲`
      })
      setStep(2)
      console.info('result: ', res)
      if (res.message === 'success') {
        setOutlineValue(res.data)
      } else {
        // 请重试
      }
    },
    [articleType, route]
  )

  const searchResult = useCallback(() => {
    route.push('/result')
  }, [route])

  useEffect(() => {
    // 这段没生效
    if (isFirstLoad) {
      setIsFirstLoad(false)
      const params = getUrlParams()
      setContent((params.content as string) || '')
      changeArticleType((params.articleType as string) || '1')
      form.setFieldsValue({
        degree: params.articleType || '2',
        content: (params.content as string) || ''
      })
    }
  }, [form, isFirstLoad, route])

  const Step1 = useCallback(() => {
    return (
      <Flex className={styles.content}>
        <div className={styles['content-form']}>
          <div className={styles.title}>
            <span>提交论文标题</span>
          </div>
          <Form form={form} onFinish={handleSubmit} className={styles['form-body']}>
            <Form.Item name="content">
              <Flex>
                <Select
                  className={styles.select}
                  options={options}
                  value={articleType}
                  onChange={changeArticleType}
                ></Select>
                <Input
                  onPressEnter={(event) => {
                    event.stopPropagation()
                    event.preventDefault()
                  }}
                  defaultValue={content}
                  className={styles.input}
                  placeholder="输入完整的论文标题，获得更好的生成效果(5-50字内或20个单词内）"
                />
              </Flex>
            </Form.Item>
            <Form.Item label="选择学历" name="degree">
              <Radio.Group>
                <Radio value={'1'}>大专</Radio>
                <Radio value={'2'}>本科</Radio>
                <Radio value={'3'}>硕士</Radio>
              </Radio.Group>
            </Form.Item>
            <Form.Item>
              <div className={styles['btn-group']}>
                <Button type="primary" htmlType="submit" className={styles['btn-item']}>
                  推荐提纲
                </Button>
                <Button
                  style={{ marginLeft: 20 }}
                  onClick={searchResult}
                  className={styles['btn-item']}
                >
                  查询结果
                </Button>
              </div>
            </Form.Item>
          </Form>
        </div>
      </Flex>
    )
  }, [articleType, content, form, handleSubmit, searchResult])

  const Step3 = useCallback(() => {
    return (
      <div className={styles['pay-box']}>
        <div className={styles.scan}>扫码支付后，开始生成</div>
        <img className={styles.pay} src="/img/pay.jpg" alt="" />
        <Button size="large" type="link" onClick={searchResult} className={styles['pay-success']}>
          支付完成，去查询订单
        </Button>
      </div>
    )
  }, [searchResult])

  const Step2 = useCallback(() => {
    return (
      <Flex className={styles['content-max']}>
        <div className={styles['content-form-max']}>
          <Form onFinish={handleSubmit} form={form} className={styles['form-body']}>
            <Form.Item name="content">
              <Flex>
                <Select
                  className={styles.select}
                  options={options}
                  value={articleType}
                  onChange={changeArticleType}
                ></Select>
                <Input
                  onPressEnter={(event) => {
                    event.stopPropagation()
                    event.preventDefault()
                  }}
                  defaultValue={content}
                  className={styles['input-max']}
                  placeholder="输入完整的论文标题，获得更好的生成效果(5-50字内或20个单词内）"
                />
                <div className={styles['btn-group']}>
                  <Button type="primary" htmlType="submit" className={styles['btn-item']}>
                    推荐提纲
                  </Button>
                  <Button
                    style={{ marginLeft: 20 }}
                    onClick={searchResult}
                    className={styles['btn-item']}
                  >
                    查询结果
                  </Button>
                </div>
              </Flex>
            </Form.Item>
            <Form.Item label="选择学历" name="degree">
              <Radio.Group>
                <Radio value={'1'}>大专</Radio>
                <Radio value={'2'}>本科</Radio>
                <Radio value={'3'}>硕士</Radio>
              </Radio.Group>
            </Form.Item>
          </Form>
          <div>
            <OutlineGroup value={outlineValue} />
          </div>
        </div>
      </Flex>
    )
  }, [articleType, content, form, handleSubmit, outlineValue, searchResult])
  return (
    <Layout title="提交论文标题">
      <Tip />
      {step === 1 && <Step1 />}
      {step === 2 && <Step2 />}
      {step === 3 && <Step3 />}
    </Layout>
  )
}

export default Home
