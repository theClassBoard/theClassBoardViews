import logo from '../../Assets/Logo/logo.png'
import * as S from './LoadingScreen.styled'

const LoadingScreen = () => {
  return (
    <S.LoadingScreenContainer className='center'>
      <img src={logo} alt="" />
    </S.LoadingScreenContainer>
  )
}

export default LoadingScreen