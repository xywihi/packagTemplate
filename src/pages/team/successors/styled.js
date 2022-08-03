import styled from 'styled-components'

export const SuccessorsBox = styled.div`
    flex: 1;
    height: 100%;
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

export const TabBox = styled.div`
    margin: 45px 0;
    padding:12px;
    .adm-tabs-header{
        border:0;
        padding:20px 12px;
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
export const SuccessorCard = styled.div`
    background:#F4F4F4;
    padding:12px;
    margin:0 6px;
    border-radius:10px;
    .title{
        display:flex;
        justify-content:space-between;
        align-items:center;
        margin-bottom:20px;
        &>span{
            font-weight:bold;
        }
        &>div{
            &>span:first-child{
                font-size:18px;
                margin-right:6px;
            }
            &>span:last-child{
                font-size:14px;
            }
        }
    }
    .avtors{
        display:flex;
        &>div{
            margin-right:6px;
        }
    }
`

export const RankingTeam = styled.div`
    padding:6px;
    margin-top: 20px;
`
export const RankingTeamItem = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding:8px 0;
`