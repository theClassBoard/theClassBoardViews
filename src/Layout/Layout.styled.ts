import styled from 'styled-components'
import {Outlet} from 'react-router-dom'
import { textColor } from '../frontend.config'

export const LayoutContainer = styled.section`
    height: fit-content;
    width: min(1980px, 100%);
    display: flex;
    background-color: #F5EEFF;

    //Color of all preceding text
    color: ${textColor};
`

/*
    Initially the height of the section is maintained by the side panel which itself has a height of 100vh.
    If the height of the outlet exceeds 1080px (the max-height of the side-panel) the container will grow accordingly.
*/