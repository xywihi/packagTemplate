import styled from 'styled-components';
export const Buttons = styled.div`
    display:flex;
    justify-content: space-around;
    margin-top:20%;
    
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
