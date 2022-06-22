import { FC } from "react"
import * as S from './Home.styled'
import UpNext from "./UpNext/UpNext"

const Home:FC = () => {
  return (
    <S.HomeContainer>
      <div className="inner">
        <S.CardContainer>
          <UpNext/>
        </S.CardContainer>
      </div>
    </S.HomeContainer>
  )
}

export default Home