import type { NextApiRequest, NextApiResponse } from 'next'

type ResponseData = {
  message: string
  data?: Record<string, any>
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
  const { content } = req.body
  // 超时处理
  const gptResult = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`
    },
    body: JSON.stringify({
      model: 'gpt-4',
      messages: [{ role: 'user', content: content }],
      temperature: 0.7
    })
  })
  gptResult
    .json()
    .then((data) => {
      console.log('data: ', data)
      res.status(200).json({ message: 'success', data })
    })
    .catch((err) => {
      console.log('err: ', err)
    })
}
