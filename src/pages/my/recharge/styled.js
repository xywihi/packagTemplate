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