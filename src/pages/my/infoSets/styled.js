import styled from 'styled-components'
export const InfoSetsBox = styled.div`
    padding:0 12px;
    width:100%;
    height:100%;
    overflow:auto;
    &::-webkit-scrollbar {
        display: none; /* Chrome Safari */
    }
    .top{
        position:fixed;
        left: 0px;
        width:100%;
        color:#333;
        background:#fff;
        box-shadow:0px 2px 10px #ececec
    }
`
export const InfoSetsContentBox = styled.div`
    margin-top:60px;
`
export const AvatarsBox = styled.div`
    padding:20px 12px;
`
export const AvatarListBox = styled.div`
    display:flex;
    justify-content:space-between;
    flex-wrap: wrap;
    margin: 12px 0;
`
export const FormItemBox = styled.div`
    .adm-list-item,.adm-list-item-content{
        padding:0;
        border:none;
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