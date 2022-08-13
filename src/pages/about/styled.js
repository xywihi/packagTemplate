import styled from 'styled-components'
import homeBg from '../../assets/images/homeBg.png'
export const AboutBox = styled.div`
    flex: 1;
    height: 100%;
    overflow:auto;
    padding:0 12px;
    &::-webkit-scrollbar {
    display: none; /* Chrome Safari */
    }
    .top{
        position:fixed;
        left: 0px;
        width:100%;
        color:#333;
        background:#fff;
        box-shadow:0px 2px 10px #ececec;
        -moz-box-shadow:0px 2px 10px #ececec;
        -webkit-box-shadow:0px 2px 10px #ececec;
    }
    .noMore{
        color:#E7E7E7;
        font-size:20px;
        font-weight:bold;
        text-align:center;
        margin:20px 0;
    }
`
export const VedioCard = styled.div`
    background:#F4F4F4;
    border-radius:10px;
    height:166px;
`
export const AboutContBoxTop = styled.div`
    margin-top:60px;
    
`
export const AboutContBox = styled.div`
`

export const KnowBox = styled.div`
    margin-top:32px;
    .adm-slider-thumb-container{
        display:flex;
    }
    .adm-slider-thumb{
        transition:all .5s ease;
        width:${props=>props.touched ? "24px" : "12px"};
        height:${props=>props.touched ? "24px" : "12px"};
        background:#07B9B9;
        box-shadow:0px 4px 10px #0e8c6170;
        -moz-box-shadow:0px 4px 10px #0e8c6170;
        -webkit-box-shadow:0px 4px 10px #0e8c6170;
        margin:auto;
        svg{
            display:none;
        }
    }
`
export const DesItem = styled.div`
    margin-top:32px;
    background:#F4F4F4;
    padding:12px;
    border-radius:10px;
    &>div:first-child{
        font-size:24px;
        font-weight:bold;
    }
    &>div:last-child{
        margin-top:12px;
        font-size:14px;
        line-height:20px;
    }
    
`

