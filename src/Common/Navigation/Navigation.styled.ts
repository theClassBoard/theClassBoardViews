import styled from 'styled-components'
import { coloPaletteDark } from '../../frontend.config'

export const SideMenuConstants = {
    heightClampValues : ['500px', '100vh', '1366px'],
    navHeightPercentage: 90
}

export const SideMenuContainer = styled.header`
    width: 20%;
    height: clamp(${SideMenuConstants.heightClampValues[0]}, ${SideMenuConstants.heightClampValues[1]}, ${SideMenuConstants.heightClampValues[2]});
    position: sticky;
    top: 0; 
    left: 0;
    color: black;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`

export const Nav = styled.nav`
    width: 90%;
    height: ${`${SideMenuConstants.navHeightPercentage}%`};
    border-radius: 35px;
    background-color: white;
    box-shadow:5px 20px 30px -5px #c6c6c6;

    & ul{
        width: 100%;
    }

    & a {
        color: inherit;
    }
`