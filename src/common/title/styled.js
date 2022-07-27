import styled from 'styled-components'

export const TitleBox = styled.div`
    display:flex;
    align-items:center;
    span{
        margin-left:8px;
        font-weight:${props => props.weight || '500'};
        font-size:${props => props.size+'px' || 'auto'};
    }
`
