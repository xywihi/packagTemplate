import React, { useState } from "react";
import {
  Image,
  Tabs,
} from "antd-mobile";
import {
  LoginBox,
  LoginInnerBoxFirst,
  LoginContentBox,
  DesBox,
  DesBigItem,
  DesSmallItem,
  TabBox,
  TopType,
} from "./styled";
import { connect } from "react-redux";
import grassOne from "@/assets/images/grassOne.png";
import TopNav from "@/common/TopNav";
import LoginPhone from "./component/login/phoneNumber";
import LoginEmail from "./component/login/email";
import RegisterEmail from "./component/register/email";
import RegisterPhone from "./component/register/phoneNumber";
const Login = (props) => {
  const [method, setMethod] = useState("login");
  return (
    <LoginBox>
      <div className="top">
        <TopNav
          back={null}
          left={<span style={{ color: "white" }}>LOGO</span>}
          right="English"
        />
      </div>
      <LoginInnerBoxFirst>
        <LoginContentBox>
          <DesBox>
            <DesBigItem>Protect our</DesBigItem>
            <DesSmallItem>common home</DesSmallItem>
          </DesBox>
          <TabBox>
            <TopType>
              <Image
                src={grassOne}
                width={30}
                height={30}
                fit="cover"
                className="grassesImg"
              />
              <span>{method === "login" ? "Login" : "Register"}</span>
            </TopType>
            {method === "login" ? (
              <Tabs
                style={{
                  "--active-title-color": "#333",
                  "--active-line-height": "0",
                }}
              >
                <Tabs.Tab title="Password" key="password">
                  <LoginPhone setMethod={setMethod}/>
                </Tabs.Tab>
                <Tabs.Tab title="Verification" key="verification">
                  <LoginEmail setMethod={setMethod}/>
                </Tabs.Tab>
              </Tabs>
            ) : (
              <Tabs
                style={{
                  "--active-title-color": "#333",
                  "--active-line-height": "0",
                }}
              >
                <Tabs.Tab title="Password" key="password">
                  <RegisterPhone setMethod={setMethod}/>
                </Tabs.Tab>
                <Tabs.Tab title="Verification" key="verification">
                  <RegisterEmail setMethod={setMethod}/>
                </Tabs.Tab>
              </Tabs>
            )}
          </TabBox>
        </LoginContentBox>
      </LoginInnerBoxFirst>
    </LoginBox>
  );
};


const getStoreData = (state) => {
  return {
    staticData: state.staticData.data,
  };
};
const dispatchAction = (dispatch, ownProps) => {
  return {};
};
export default connect(getStoreData, dispatchAction)(Login);
