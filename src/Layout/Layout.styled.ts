import styled from 'styled-components'
import {Outlet} from 'react-router-dom'
import { textColor } from '../frontend.config'

export const LayoutContainer = styled.section`
    height: auto;
    width: min(1980px, 100%);
    display: flex;

    //Color of all preceding text
    color: ${textColor};
`