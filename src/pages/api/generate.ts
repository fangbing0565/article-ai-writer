import mockData from './mock_gpt_outline.json'
import mockData2 from './mock_gpt_outline2.json'
// import { safeGetGPTData } from 'backend/logic'
import type { NextApiRequest, NextApiResponse } from 'next'

type ResponseData = {
  message: string
  data?: Record<string, any>
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
  const { content } = req.body
  console.log('content: ', content)
  res.status(200).json({
    message: 'success',
    data: [mockData.choices[0].message.content, mockData2.choices[0].message.content]
  })
  // const { content } = req.body
  // const result: any = await safeGetGPTData(content)
  // if (result.status === 'success') {
  //   res.status(200).json({ message: 'success', data: result.data })
  // } else {
  //   console.log('error', result.error)
  //   res.status(200).json({ message: 'error', data: { message: 'AI生成错误，请尝试重试' } })
  // }
}
