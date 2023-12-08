import type { NextApiRequest, NextApiResponse } from 'next'
// import { postData } from 'utils'
import OpenAI from 'openai'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
})

// const openaiInstance = new OpenAI(process.env.NEXT_PUBLIC_OPENAI_KEY)

type ResponseData = {
  message: string
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
  // if (req.method === 'POST') {
  // Process a POST request
  const { content } = req.body
  console.log('content: ', content)
  const chatCompletion = await openai.chat.completions.create({
    messages: [{ role: 'user', content }],
    model: 'gpt-3.5-turbo'
  })
  console.log('chatCompletion', chatCompletion)
  // await postData(
  //   'https://api.openai.com/v1/chat/completions',
  //   {},
  //   {
  //     Authorization: `Bearer ${process.env.NEXT_PUBLIC_OPENAI_KEY}`
  //   }
  // )
  // } else {
  // Handle any other HTTP method
  // }
  res.status(200).json({ message: 'Hello from Next.js!' })
}
