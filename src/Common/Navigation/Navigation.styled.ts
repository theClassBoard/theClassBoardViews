import styled from 'styled-components'
import { coloPaletteDark } from '../../frontend.config'

export const SideMenuContainer = styled.header`
    width: 15%;
    background-color:${coloPaletteDark[2]};
    height: 100vh;
    position: sticky;
    top: 0; 
    left: 0;
    color: inherit;
`

export const Nav = styled.nav`
    width: 100%;
    height: auto;

    & ul{
        width: 100%;
    }

    & a {
        color: inherit;
    }
`