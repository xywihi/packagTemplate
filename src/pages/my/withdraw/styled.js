import styled from "styled-components";
export const InfoSetsBox = styled.div`
  padding: 0 12px;
  width: 100%;
  height: 100%;
  overflow: auto;
  &::-webkit-scrollbar {
    display: none; /* Chrome Safari */
  }
  .top {
    position: fixed;
    left: 0px;
    width: 100%;
    color: #333;
    background: #fff;
    box-shadow: 0px 2px 10px #ececec;
  }
`;
export const HistoryBox = styled.div`
    
    .historyTitle{
        position: sticky;
        top: 38px;
        background: #fff;
        padding-top: 25px;
        padding-bottom: 15px;
        &>span:last-child svg{
            color:#D8D8D8;
            margin-right:4px;
        }
        &>span:last-child span{
            font-weight:bold;
        }
    }
`
export const HistoryContentBox = styled.div`
    margin-top: 10px;
`

export const HistoryList = styled.div`
    &>div:first-child {
        border:none;
        padding:0;
        span{
            margin-left:4px;
        }
    }
`

export const HistoryItem = styled.div`
    display:flex;
    align-items:center;
    justify-content: space-between;
    padding:16px 0;
    border-bottom:1px dashed #EAEAEA;
    .money{
        font-weight:bold;
    }
    .time span{
        margin-right:8px;
    }
    .time>span:last-child {
        color:#B6B6B6;
    }
`