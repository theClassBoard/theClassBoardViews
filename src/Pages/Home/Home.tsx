import { FC } from "react"
import * as S from './Home.styled'
import UpNext from "./UpNext/UpNext"

const Home:FC = () => {
  return (
    <S.HomeContainer>
      <S.HeaderContainer>

      </S.HeaderContainer>
      <div className="inner">
        <S.CardContainer className="bottomGroup">
          <UpNext/>
          <UpNext/>
          <UpNext/>
          <UpNext/>
        </S.CardContainer>
      </div>
    </S.HomeContainer>
  )
}

export default Home