import styled from 'styled-components'
import sunBg from '../../assets/images/sunBg.png';
export const LevelBox = styled.div`
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
        -moz-box-shadow:0px 2px 10px #ececec
        -webkit-box-shadow:0px 2px 10px #ececec
    }
`
export const LevelContentBox = styled.div`
    margin-bottom: 60px;
`
export const AuthorLevel = styled.div`
    margin-bottom:20px;
    padding-top: 50px;
    background-image:url(${sunBg});
    background-position-y: 5px;
    background-repeat: no-repeat;
    background-size: contain;
    margin-top: 60px;
    position:relative;
    .sun{
        position:absolute;
        top: -4px;
        left: 0;
        z-index:0;
        animation:identifier 3s linear infinite;
        @keyframes identifier{
        0%{
            transform:rotate(0deg);
        }
        ${'' /* 50%{
            transform:translateX(600%) translateY(40%) rotate(180deg);
        } */}
        100%{
            transform:rotate(360deg) ;
        }
    }
    }
`
export const InfoCard = styled.div`
    background:#ECF4EE;
    padding:12px;
    border-radius:10px;
    width:calc(100% - 24px);
    z-index:10;
    position: relative;
    .author,.icons{
            display:flex;
            align-items:center;
        }
    .icons,.level{
        margin-left:10px;
    }
    .level{
        border:1px dashed #00B578;
        padding:6px;
        color:#00B578;
        font-size:12px;
        border-radius:50px;
    }
    .des{
        margin-top:20px;
        font-size:12px;
        color:#A2A2A2;
        line-height:14px;
    }
    
`