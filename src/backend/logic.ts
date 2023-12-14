const getGPTData = async (content: string) => {
  // 超时处理
  try {
    const gptResult = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: 'gpt-4',
        messages: [{ role: 'user', content: content }],
        // messages: [{ role: 'user', content: '你好' }],
        temperature: 0.7
      })
    })
    const data = await gptResult.json()
    return { status: 'success', data }
  } catch (error: any) {
    // if (error.message.includes('socket hang up')) {
    //   return { status: 'error', error }
    // }
    return { status: 'error', error }
  }
}

const safeGetGPTData = async (content: string) => {
  console.log('content: ', content)
  let count = 0
  let result: any = {}
  do {
    count++
    result = await getGPTData(content)
    console.log('result----: ', result)
  } while (!((result.status === 'error' && count === 5) || result.status === 'success'))
  return result
}

export { getGPTData, safeGetGPTData }
