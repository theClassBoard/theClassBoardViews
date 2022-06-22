import styled from 'styled-components'
import { SideMenuConstants } from '../../Common/Navigation/Navigation.styled'

const InnerMarginValue = ((100 - SideMenuConstants.navHeightPercentage)/2)*.01

export const HomeContainer = styled.section`
    height: fit-content;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items:center;
    margin-top: clamp(  
            calc(${`${SideMenuConstants.heightClampValues[0]} * ${InnerMarginValue}`}),
            calc(${`${SideMenuConstants.heightClampValues[1]} * ${InnerMarginValue}`}),
            calc(${`${SideMenuConstants.heightClampValues[2]} * ${InnerMarginValue}`})
    );
    margin-bottom: 50px;
    & .inner{
        height: fit-content;
        width: 95%;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        gap: 30px;
    }
`
/*
    The height of the header is clamped between 3 values and the side panel always takes up 90% of the header height. 
    The reason that the inner container is not simply given a height of 90%, is that the screen will not be responsive for larger viewports.
    When the screen size is larger the scroll bar, if there was a need for one, would not be in the browser window. 
*/

export const HeaderContainer = styled.div`
    display: flex;
    width: 95%;
    height:3em;
`

export const CardContainer = styled.div`
    width: 100%;
    height: auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: auto;
    justify-items: center;
    align-content: center;
    row-gap: 30px;
`