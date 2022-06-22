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