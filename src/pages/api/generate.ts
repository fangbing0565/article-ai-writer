import mockData from './mock_gpt_outline.json'
// import { safeGetGPTData } from 'backend/logic'
import type { NextApiRequest, NextApiResponse } from 'next'

type ResponseData = {
  message: string
  data?: Record<string, any>
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
  res.status(200).json({ message: 'success', data: mockData })
  // const { content } = req.body
  // const result: any = await safeGetGPTData(content)
  // if (result.status === 'success') {
  //   res.status(200).json({ message: 'success', data: result.data })
  // } else {
  //   console.log('error', result.error)
  //   res.status(200).json({ message: 'error', data: { message: 'AI生成错误，请尝试重试' } })
  // }
}
