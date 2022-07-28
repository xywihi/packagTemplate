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
    transition: .3s;
    opacity:${props => props.disable? 0.2 : 1};
    background:${props => props.background};
    box-shadow:0px 2px 4px ${props => props.background+'6a'};
    -moz-box-shadow:0px 2px 4px ${props => props.background+'6a'} ; /*firefox*/ 
    -webkit-box-shadow: 0px 2px 4px ${props => props.background+'6a'};
    
`
