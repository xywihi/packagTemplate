import styled from 'styled-components'

export const NoticeBox = styled.div`
    color:#00B578;
    background:#ECF4EE;
    flex: 1;
    border-radius:50px;
    font-size:12px;
    padding: 10px 12px;
    display:flex;
    align-items: center;
    overflow:hidden;
    .contentBox{
        overflow:hidden;
        height:20px;
        flex: 0 90%;
        position:relative;
    }
`
export const NoticeItem = styled.span`
    margin-left:6px;
    display:inline-block;
    animation:${props=>props.toMove ?'action 4s linear infinite':'unset'};
    margin-bottom:20px;
    opacity:${props=>props.toMove ? 1 : 0};
    position:absolute;
    overflow:hidden;
    white-space:nowrap;
    text-overflow:ellipsis;
    max-width:100%;
`