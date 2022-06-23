import { FC } from "react"
import * as S from './Home.styled'
import UpNext from "./UpNext/UpNext"
import pfp from '../../Assets/pfp.jpeg'

const Home:FC = () => {
  return (
    <S.HomeContainer>
      <S.HeaderContainer>
        Netlify test
        <img src={pfp} alt="" />
      </S.HeaderContainer>
      <div className="inner">
        <S.CardContainer className="bottomGroup">
          <S.Card></S.Card>
          <S.Card></S.Card>
          <S.Card></S.Card>
          <S.Card></S.Card>
        </S.CardContainer>
      </div>
    </S.HomeContainer>
  )
}

export default Home