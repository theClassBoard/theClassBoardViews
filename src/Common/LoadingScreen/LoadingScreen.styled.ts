import styled from 'styled-components'
import { colorPallete } from '../../frontend.config'

export const LoadingScreenContainer = styled.section`
    width: 100%;
    height: 100vh;
    background-color: ${colorPallete.secondary};

    & img{
        height: 80px;
        width: auto;
        border-radius: 10px;
    }
`