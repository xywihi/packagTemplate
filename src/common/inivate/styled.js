import styled from 'styled-components'

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
    .linkBox,.QRCodeBox{
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
    }
    .link,.des{
        margin:12px 0;
    }
    .link{
        font-weight:bold;
        font-size:16px;
    }
    .des{
        margin-bottom:40px;
        color:#CBCBCB;
        font-size:12px;
    }
`