import { FC } from "react"
import { Outlet } from "react-router-dom"
import Navigation from "../Common/Navigation/Navigation"
import * as S from './Layout.styled'


const Layout:FC = () => {
  return (
    <S.LayoutContainer>
        <Navigation/>
        <Outlet/>
    </S.LayoutContainer>
  )
}

export default Layout