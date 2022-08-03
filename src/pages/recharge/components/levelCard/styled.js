import styled from 'styled-components'

export const CardBox = styled.div`
    display:flex;
    align-items:center;
    justify-content: space-between;
    border-radius:10px;
    padding:20px;
    width:calc(100% - 40px);
    background:#F4F4F4;
    margin-top:12px;
    .rightBox{
        padding:0;
    }
`
export const CardContentLeft = styled.div`
    display:flex;
    flex-direction:column;
    justify-content: space-between;
    height: 100%;
    .icons{
        display:flex;
        align-items:center;
        margin-bottom:8px;
    }
    .price{
        margin-top:20px;
        
        span:first-child{
            font-size:36px;
            font-weight:bold;
            margin-right:12px;
        }
    }
`
export const CardContentRight = styled.div`
    
`
