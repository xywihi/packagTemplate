import React from "react";
import { SpinLoading, Mask } from "antd-mobile";
import { LoadBox } from "./styled.js";
const Loading = () => {
  return (
    <Mask visible={true} color='white'>
      <LoadBox>
        <SpinLoading color="#91D6A3" />
      </LoadBox>
    </Mask>
  );
};

export default Loading;
