import styled from 'styled-components';
import homeBg from '../../assets/images/homeBg.png';
import xianrenzhang from '../../assets/images/xianrenzhang.png';
import grassOne from '../../assets/images/grassOne.png';
export const LoginBox = styled.div`
    flex: 1;
    height: 100%;
    background:url(${homeBg});
    background-size:auto 180% ;
    background-repeat: no-repeat;
    background-attachment:fixed;
    .adm-form-footer {
        padding: 20px 0;
    }
`
export const LoginInnerBoxFirst = styled.div`
    margin-top:155px;
    background:#fff;
    border-top-left-radius:116px;
    border-top-right-radius:0px;
    flex: 1;
    height: calc(100% - 200px);
    position:relative;
    &:after{
        content: '';
        width: 100%;
        height: 256px;
        border-bottom-right-radius: 210px;
        border-bottom-left-radius: 0;
        position: absolute;
        box-shadow: 130px 0px 0px #fff, 226px 0px 0px #fff, 227px 27px 0px #fff;
        top: -256px;
        right: 0px;
        z-index: 0;
    }
`
export const LoginContentBox = styled.div`
    z-index:1;
    width: calc(100% - 24px);
    position:absolute;
    padding: 0 12px;
`
export const DesBox = styled.div`
    position:absolute;
    color:#fff;
    top: -119px;
    left: 27px;
`
export const DesBigItem = styled.div`
    font-size:32px;
    margin-bottom:8px;
`
export const DesSmallItem = styled.div`
    font-size:20px
`
export const TabBox = styled.div`
    margin: 40px 0;
    .adm-tabs-header{
        border:0;
        padding:0 52px;
        color:#C7C7C7;
    }
    .adm-tabs-tab-active{
        font-weight:bold;
        position:relative;
        border:none;
        &:after{
            content:'';
            position:absolute;
            top:calc(50% - 6px);
            left:-10px;
            width:4px;
            height:8px;
            border-radius:20px;
            background:#00B578;
        }
    }
    .adm-list-body, .adm-list-item-content{
        border:none;
    }
`
export const FormItemBox = styled.div`
    margin-top:16px;
    .adm-list-item,.adm-list-item-content{
        padding:0;
    }
        .adm-form-item-child{
            background:#F4F4F4;
            border-radius:10px;
            padding:12px 14px;
        }
    .rulesBox {
        font-size:12px;
        display:flex;
        align-items:center;
        &>span{
            margin-left:12px;
        }
        text-decoration:underline;
    }   
`
export const Lable = styled.div`
    margin-bottom:4px;
    font-size:14px;
    font-weight:bold;
    display:flex;
    justify-content: space-between;
    &>span:last-child{
        color:#00B578;
        font-weight:500;
        font-size:12px;
    }
`
export const Buttons = styled.div`
    display:flex;
    justify-content: space-between;
    
    
`
export const TopType = styled.div`
    margin: -10px 0 30px;
    font-size:32px;
    font-weight:bold;
    display:flex;
    justify-content: end;
    span{
        margin-left:12px;
    }
`
