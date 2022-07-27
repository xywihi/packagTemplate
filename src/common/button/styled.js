import styled from 'styled-components'

export const ButtonBox = styled.div`
    display:flex;
    align-items:center;
    justify-content: center;
    border-radius:50px;
    text-align:center;
    font-weight:bold;
    padding:0 14px;
    font-size:${props => props.size};
    color:${props => props.color};
    width:${props => props.width};
    height:${props => props.height};
    background:${props => props.background};
    box-shadow:0px 2px 4px ${props => props.background+'6a'};
`
