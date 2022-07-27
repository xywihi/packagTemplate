import styled from 'styled-components'

export const TitleBox = styled.div`
    display:flex;
    align-items:center;
    justify-content: space-between;
    span{
        margin-left:8px;
        font-weight:${props => props.weight || '500'};
        font-size:${props => props.size};
    }
    .left{
        display:flex;
        align-items:center;
    }
    .right{
        float:right;
        span{
            font-size:12px;
            font-weight:500;
        }
        
    }
`
