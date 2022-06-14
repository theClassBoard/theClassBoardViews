import { FC } from "react"
import { coloPaletteDark } from "../../frontend.config"

const Home:FC = () => {
  return (
    <div style={{height: '1000px', backgroundColor:`${coloPaletteDark[1]}`, width: '85%'}}>Home</div>
  )
}

export default Home