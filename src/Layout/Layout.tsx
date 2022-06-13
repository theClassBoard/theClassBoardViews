import { Outlet } from "react-router-dom"
import Navigation from "../Common/Navigation/Navigation"


const Layout = () => {
  return (
    <>
        <Navigation/>
        <Outlet/>
    </>
  )
}

export default Layout