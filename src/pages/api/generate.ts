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
      // messages: [{ role: 'user', content: '基于《中国西部文化旅游业开发的时代意义》写一篇大纲' }],
      temperature: 0.7
    })
  })
  gptResult.json().then((data) => {
    res.status(200).json({ message: 'success', data })
  })
}
