import { useEffect } from 'react'

const Loading = () => {
  /**
   * inside _app.js function for remove the loader
   */
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const loader = document.getElementById('globalLoader')
      if (loader) loader.remove()
    }
  }, [])

  return <div>111</div>
}

export default Loading
