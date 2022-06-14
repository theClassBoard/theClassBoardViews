import { Link } from "react-router-dom"
import * as S from './Navigation.styled'

const Navigation = () => {
  return (
    <S.SideMenuContainer>
        <nav>
            <Link to="/" >Home</Link>
            <Link to="asdfadf">404</Link>
        </nav>
    </S.SideMenuContainer>
  )
}

export default Navigation