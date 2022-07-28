import styled from 'styled-components';
import homeBg from '../../assets/images/homeBg.png';
import xianrenzhang from '../../assets/images/xianrenzhang.png';
import grassesBg from '../../assets/images/grassesBg.png';
export const HomeBox = styled.div`
    flex: 1;
    height: 100%;
    background:url(${homeBg});
    background-size:180% auto;
    background-repeat: no-repeat;
    background-attachment:fixed;
`
export const HomeInnerBoxFirst = styled.div`
    margin-top:180px;
    background:#fff;
    border-top-left-radius:50px;
    flex: 1;
    height: 100%;
    position:relative;
    &:after{
        content:'';
        width:50px;
        height:50px;
        background:#fff00;
        border-bottom-right-radius:50px;
        position:absolute;
        box-shadow:0px 20px 0px #fff,20px 0px 0px #fff,40px 10px 0px #fff;
        top:-50px;
        right:0;
        z-index:0;
    }
`
export const HomeContentBox = styled.div`
    z-index:1;
    width: calc(100% - 24px);
    position:absolute;
    top:-80px;
    padding: 0 12px;
    padding-bottom: 60px;
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
    align-items:center;
    margin-top:8px;
    .leftBox{
        flex: inherit;
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
                display: inline-block;
                transition:.8s all ease;
                opacity:${props => props.got ? 0 : 1};
                transform: translateY(${props => props.got ? -40 : 0}px);
            }
            .topRight_got{
                color:#B9D4D4;
                font-size:12px;
                margin-left:12px;
                position: relative;
                left: -92px;
                transition:.5s all ease;
                opacity:${props => props.got ? 1 : 0};
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
        font-size:16px;
        font-weight:bold;
        padding:0;
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
    width:48%;
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
export const ForestBox = styled.div`
    margin-top:32px;
`
export const ForestContent = styled.div`
    width: 100%;
    margin-top:20px;
    justify-content:space-between;
    .adm-page-indicator-dot-active{
        background:#00B578;
    }
`
export const SwiperItem = styled.div`
        height: 96px;
        padding:12px;
        border-radius:10px;
        margin-right:8px;
        color: #ffffff;
        display: flex;
        flex-direction: column;
        justify-content:space-between;
        align-items: start;
        user-select: none;
        background-image:${props => props.active ? '' : 'linear-gradient(to right, white 0%,white 0%),'} url(${props => props.bgImg});
        background-blend-mode: saturation;
        background-size: cover;
        >div:last-child {
            span{
                margin-left:4px;
            }
            font-size:13px;
        }
`
export const ForestItemDes = styled.div`
        margin-top:12px;
        color:#444;
        font-size:14px;
        line-height:24px;
`
export const ModalContentBox = styled.div`
        background:#fff;
        padding:16px;
        border-radius:10px;
        display:flex;
        flex-direction:column;
        align-items:center;
        position: absolute;
        left: calc(50% - 164px) ;
        top: calc(50% - 113px) ;
        width:296px;
        height:226px;
        background-image:url(${props=>props.type!='vip' ? xianrenzhang : grassesBg});
        background-repeat: no-repeat;
        background-size: 90% auto;
        background-position-x: center;
        background-position-y: 95%;
        .hecaiImg{
            z-index:-1;
            position:absolute;
            top:-130px;
            transition:.2s all ease;
            transform:scale(${props => props.finish ? 1 : 0});
        }
`
export const ModalTopCad = styled.div`
    width:214px;
    height:72px;
    border-radius:10px;
    background:#FDD75A;
    color:#333;
    text-align: center;
    line-height: 72px;
    position:absolute;
    top: -40px;
    left: calc(50% - 107px);
    span:first-child{
        font-size:36px;
        font-weight:bold;
    }
    span:last-child{
        font-size:12px;
        margin-left:6px;
    }
`
export const ModalContent = styled.div`
    margin-top:40px;
    p:first-child{
        text-align:center;
        font-size:16px;
        color:#333;
        line-height:28px;
    }
    p:last-child{
        margin-top:20px;
        text-align:center;
        font-size:14px;
        color:#BFBFBF;
        line-height:16px;
    }
`
export const ModalButton = styled.div`
    width: 113px;
    height: 36px;
    background: #00B578;
    border-radius: 10px;
    color: #fff;
    font-size: 18px;
    line-height: 36px;
    text-align: center;
    margin-top: 37px;
    box-shadow:0px 4px 10px #0e8c6170;
`
export const RadiuBox = styled.div`
    width:60px;
    height:60px;
    margin-bottom: 10px;
    align-self: end;
    .waters{
        width:60px;
        height:60px;
        overflow:hidden;
        background:#9adabb7a;
        ${'' /* isolation: isolate; */}
        box-shadow:inset 0px -4px 10px #91D6A3,inset -1px 1px 1px #fff,0px 4px 10px #0e8c6170;
        border-radius:50%;
        position:relative;
        display:flex;
        justify-content:center;
        align-items:center;
        &:after{
        content:'123';
        position:absolute;
        text-align:center;
        color:#0E8C40;
        font-weight:bold;
        font-size:22px;
    }
    }
    .grassesImg{
        position: absolute;
        top: 2px;
        z-index: 999;
        left: calc(50% - 20px);
    }
    
`
export const Radiu = styled.div`
    width:140px;
    height:140px;
    box-shadow:0px 0px 0px 100px #69e083cc;
    ${'' /* mix-blend-mode: difference; */}
    border-radius:30%;
    position:absolute;
    top:-90px;
    animation:identifier 6s linear infinite;
    display:flex;
    justify-content:center;
    align-items:center;
    overflow:hidden;
    @keyframes identifier{
        0%{
            transform:rotate(0deg);
        }
        50%{
            transform:rotate(180deg);
        }
        100%{
            transform:rotate(360deg);
        }
    }
`
export const RadiuInner = styled.div`
    width:140px;
    height:140px;
    box-shadow:0px 0px 0px 100px #5cc878e6;
    border-radius:36%;
    position:absolute;
    top:-90px;
    animation:identifierInner 6s linear infinite;
    display:flex;
    justify-content:center;
    align-items:center;
    overflow:hidden;
    @keyframes identifierInner{
        0%{
            transform:rotate(30deg);
        }
        50%{
            transform:rotate(210deg);
        }
        100%{
            transform:rotate(390deg);
        }
    }
`
export const GrassesImg = styled.div`
    position:absolute;
    top:14px;
`