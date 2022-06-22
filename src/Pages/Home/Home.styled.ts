import styled from 'styled-components'
import { SideMenuConstants } from '../../Common/Navigation/Navigation.styled'

const InnerMarginValue = ((100 - SideMenuConstants.navHeightPercentage)/2)*.01

export const HomeContainer = styled.section`
    height: fit-content;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items:flex-start;

    & .inner{
        height: fit-content;
        height: 10000px;
        width: 95%;
        margin-top: clamp(  
            calc(${`${SideMenuConstants.heightClampValues[0]} * ${InnerMarginValue}`}),
            calc(${`${SideMenuConstants.heightClampValues[1]} * ${InnerMarginValue}`}),
            calc(${`${SideMenuConstants.heightClampValues[2]} * ${InnerMarginValue}`})
        );
    }
`
/*
    The height of the header is clamped between 3 values and the side panel always takes up 90% of the header height. 
    The reason that the inner container is not simply given a height of 90%, is that the screen will not be responsive for larger viewports.
    When the screen size is larger the scroll bar, if there was a need for one, would not be in the browser window. 
*/

export const CardContainer = styled.div`
    display: flex;
    height: auto;

`