import React from "react";
import { Skeleton } from "antd-mobile";
import { SkeletonsBox } from "./styled.js";
import TopNav from "@/common/TopNav";
const Skeletons = () => {
  return (
    <SkeletonsBox>
      <div className="top">
        <TopNav back={null} left={<span>LOGO</span>} right="English" />
      </div>
      <Skeleton.Title
        animated
        style={{ "--height": "140px", "--width": "100%" }}
      />
      <Skeleton.Title animated />
      <Skeleton.Paragraph lineCount={5} animated />
      <Skeleton.Title animated />
      <Skeleton.Paragraph lineCount={3} animated />
      <Skeleton.Title animated />
      <Skeleton.Paragraph lineCount={10} animated />
    </SkeletonsBox>
  );
};

export default Skeletons;
