import Logo from '../../Assets/NavIcons/NewLogo.png'
import * as S from './LoadingScreen.styled'

const LoadingScreen = () => {
  return (
    <S.LoadingScreenContainer className='center'>
      <img src={Logo} alt="" />
    </S.LoadingScreenContainer>
  )
}

export default LoadingScreen