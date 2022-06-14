import { FC } from "react"
import { Link } from "react-router-dom"
import * as S from './Navigation.styled'

const Navigation:FC = () => {
  return (
    <S.SideMenuContainer>
        <S.Nav>
            <Link to="/" >Home</Link>
            <Link to="asdfadf">404</Link>
        </S.Nav>
    </S.SideMenuContainer>
  )
}

export default Navigation