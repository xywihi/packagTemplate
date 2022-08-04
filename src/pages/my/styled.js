import styled from 'styled-components'
import homeBg from '../../assets/images/homeBg.png'
export const MyBox = styled.div`
    flex: 1;
    height: 100%;
    overflow:auto;
    &::-webkit-scrollbar {
    display: none; /* Chrome Safari */
    }
    .top{
        position:absolute;
        width:100%;
    }
    .noMore{
        color:#E7E7E7;
        font-size:20px;
        font-weight:bold;
        text-align:center;
        margin:20px 0;
    }
`
export const MyContBoxTop = styled.div`
    background:#061d12;
    background-image:url(${homeBg});
    background-size:cover;
    height:140px;
    padding:80px 12px 12px;
    color:#fff;
    .userInfo{
        display:flex;
        align-items:center;
        margin-bottom:20px;
        .userInf{
            margin-left:12px;
            font-size:12px;
            div{
                margin:6px 0;
                &:first-child{
                    font-size:18px;
                }
                &:last-child{
                    font-size:12px;
                    color:#ffffff80;
                    span{
                        margin-right:12px;
                    }
                }
            }
            
        }
    }
    .levelInfo{
        display:flex;
        align-items:center;
    }
    .icons{
            display:flex;
            align-items:center;
            margin-right:10px;
            
        }
    .level{
        margin-left:10px;
    }
    .level{
        border:1px dashed #00B578;
        padding:6px;
        color:#00B578;
        font-size:12px;
        border-radius:50px;
    }
    .date{
        font-size:12px;
        color:#ffffff80;
        margin-top:12px;
    }
`
export const MyContBox = styled.div`
    padding:0 12px;
    width: calc(100% - 24px);
    overflow: auto;
    margin-bottom: 50px;
`
export const AssetsBox = styled.div`
    margin-top:32px;
`
export const AssetsCard = styled.div`
    background:#FDD75A;
    border-radius:10px;
    flex-direction:column;
    padding:14px;
    margin-top: 20px;
    &>div{
        margin:12px 0;
    }
    .price{
        &>span:first-child{
            font-size:48px;
            font-weight:bold;
            margin-right:8px;
        }
        &>span:last-child{
            font-size:12px;
            color:#A29360;
        }
    }
    &,.btns{
        width:calc(100% - 28px);
        display:flex;
        align-items:center;
        justify-content: space-evenly;
    }
`
export const EarningCard = styled.div`
    margin-top:12px;
    background:#2C2C2C;
    border-radius:10px;
    padding:14px;
    .bottomContent{
        display:flex;
        align-items:center;
        justify-content: space-between;
        text-align:center;
        div div:first-child{
            font-size:18px;
            color:#fff;
            margin:36px 0 12px;
        }
        div div:last-child{
            font-size:12px;
            color:#7E7E7E;
        }
    }
`
export const InfoBox = styled.div`
    margin-top:32px;
    
`
export const InfoContent = styled.div`
    margin-top:20px;
    
`
export const InfoItem = styled.div`
    margin-bottom:12px;
    background:#F4F4F4;
    border-radius:10px;
    padding:14px;
    display:flex;
    align-items:center;
    justify-content: space-between;
`
