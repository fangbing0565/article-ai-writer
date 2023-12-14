import { NextPage } from 'next'
import Home from '../components/Home'
const IndexPage: NextPage = () => {
  return (
    <>
      <div id="globalLoader">
        <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif" alt="" />
      </div>
      <Home />
    </>
  )
}

export default IndexPage
