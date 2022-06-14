import styled from 'styled-components'
import { coloPaletteDark } from '../../frontend.config'

export const LoadingScreenContainer = styled.section`
    width: 100%;
    height: 100%;
    background-color: ${coloPaletteDark[1]};

    & img{
        height: 200px;
        width: auto;
        border-radius: 10px;
    }
`