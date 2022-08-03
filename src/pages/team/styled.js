import styled from 'styled-components'

export const TeamsBox = styled.div`
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
export const TeamsContBoxTop = styled.div`
    display:flex;
    align-items:center;
    background:#549F7D;
    height:200px;
    padding:0 12px;
    .userInf{
        margin-left:12px;
        font-size:12px;
        div{
            margin:6px 0;
        }
    }
`
export const TeamsContBox = styled.div`
    position:absolute;
    top:146px;
    padding:0 12px;
    width: calc(100% - 24px);
    overflow: auto;
    height: calc(100% - 196px);
`
export const LevelCard = styled.div`
    background:#11201B;
    padding: 12px 18px;
    border-radius:10px;
    
    .topCont{
        display:flex;
        align-items:center;
        justify-content:space-between;
        color:#fff;
        font-size:14px;
        .count{
            font-size:32px;
            font-weight:bold;
            margin-right:12px;
        }
        .des{
            color:#2F5246;
            margin-top:12px;
        }
    }
    .levelIcons,.levelCount{
        display:flex;
        align-items:center;
        justify-content:space-between;
        margin:6px 0;
        color:#fff;
    }
`
export const TeamBox = styled.div`
        margin-top: 32px;
`
export const CurrentSuccessors = styled.div`
    background:#F4F4F4;
    padding:12px;
    border-radius:10px;
    display:flex;
    align-items:center;
    justify-content:space-between;
    margin-top: 20px;
    .title{
        font-size:14px;
        margin-bottom:20px;
    }
    .count{
        &>span:first-child{
            font-size:36px;
            font-weight:bold;
        }
        &>span:last-child{
            font-size:12px;
            margin-left:6px;
        }
    }
`
export const RankingTeam = styled.div`
    background:#FDD75A;
    padding:12px;
    border-radius:10px;
    margin-top: 20px;
`
export const SuccessorsList = styled.div`
    margin-top: 20px;
    &>div{
        background:#F4F4F4;
        padding:16px 12px;
        border-radius:10px;
        margin-bottom:12px;
        display:flex;
        align-items:center;
        justify-content:space-between;
    }
`
export const RankingTeamItem = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding:8px 0;
`