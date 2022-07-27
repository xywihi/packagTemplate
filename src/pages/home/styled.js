import styled from 'styled-components'

export const HomeBox = styled.div`
    background:#333;
    flex: 1;
    height: 100%;
`
export const HomeInnerBoxFirst = styled.div`
    background:#fff;
    flex: 1;
    height: 100%;
`
export const HomeContentBox = styled.div`
    background:#fff;
    flex: 1;
    height: 100%;
    padding: 0 12px;
    
`
export const NoticeBox = styled.div`
    color:#00B578;
    background:#ECF4EE;
    flex: 1;
    border-radius:50px;
    font-size:12px;
    padding: 10px 12px;
    span{
        margin-left:6px;
    }
`
export const GetCionsBox = styled.div`
    color:#00B578;
    background:#ECF4EE;
    flex: 1;
    border-radius:10px;
    font-size:12px;
    padding: 10px 12px;
    display:flex;
    justify-content: space-between;
    margin-top:8px;
    .leftBox{
        .top{
            color:#333;
            .topLeft span:first-child{
                font-size:32px;
                font-weight:bold;
            }
            .topLeft span:last-child{
                font-size:10px;
                margin-left:6px;
            }
            .topRight{
                color:#07B9B9;
                font-size:12px;
                margin-left:12px;
            }
            margin-bottom:8px
        }
        .bot{
            font-size:10px;
            color:#A2A2A2;
        }
    }
    .rightBox{
        border-radius:50px;
        width:48px;
        height:48px;
        background:#00B578;
        font-size:16px;
        font-weight:bold;
        color: #fff;
        line-height: 48px;
        text-align:center;
        flex:0 48px;
        box-shadow:0px 4px 10px #0e8c6170;
    }
`
export const IconsTabBox = styled.div`
margin:14px 0;
.adm-space-item{
    flex:1;
}
.iconBox{
    text-align:center;
    flex:1;
    .adm-image{
        margin: 0 auto;
        margin-bottom: -10px;
    }
}
    .iconName{
        font-size:10px;
        margin-top:-12px;
       
    }
`
export const DonationBox = styled.div`
margin-top:32px;
`
export const DonationContent = styled.div`
margin-top:20px;
display:flex;
.donationInp{
    padding:8px 16px;
    background:#ECF6F3;
    border-radius:50px;
    height:28px;
    margin-right:12px;
    input{
        color:#00B578;
        font-weight:bold;
    }
    input::-webkit-input-placeholder{
        font-weight:initial;
        color:#B3D9CD;
    }
}
`
export const PioneerBox = styled.div`
    margin-top:32px;
`
export const PioneerContent = styled.div`
    display:flex;
    margin-top:20px;
    justify-content:space-between;
`
export const PioneerCard = styled.div`
    height:118px;
    width:10.6rem;
    border-radius:10px;
    background:#F4F4F4;
    background-image:url(${props => props.bgImg});
    background-repeat: no-repeat;
    background-position: 2vh 100%;
    background-size: 40px 27px;
    padding: 9px;
    box-sizing: border-box;
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    .des{
        font-size:12px;
        color:#BFBFBF;
        line-height: 15px;
    }
    .btn{
        align-self: end;
    }
    
`
