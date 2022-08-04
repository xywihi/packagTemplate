import React, { useState } from "react";
import { Image, NavBar } from "antd-mobile";
import {
  MyBox,
  MyContBoxTop,
  MyContBox,
  AssetsBox,
  AssetsCard,
  EarningCard,
  InfoBox,
  InfoContent,
  InfoItem,
} from "./styled";
import avtor from "@/assets/images/avtor.png";
import money from "@/assets/icons/money.png";
import info from "@/assets/icons/info.png";
import grass_icon1 from "@/assets/icons/grass_icon1.png";
import grass_icon2 from "@/assets/icons/grass_icon2.png";
import {
  SetOutline,
  BankcardOutline,
  MailFill,
  UploadOutline,
} from "antd-mobile-icons";
import { useHistory } from "react-router-dom";
import { store } from "@/store";
import Title from "@/common/title";
import Button from "@/common/Button";
import Loading from "@/common/Loading";
import { toLogout } from "@/api";
const TeamsPage = (props) => {
  const history = useHistory();
  const [isLoading,setIsLoading]=useState(false)
  const userInfo = store.getState().counter.userInfo;
  const cards = [
    grass_icon1,
    grass_icon1,
    grass_icon1,
    grass_icon1,
    grass_icon2,
  ];
  let toSuccessorList = (level) => {
    history.push("/team/list", { level });
  };
  let handleRecharge = () => {
    console.log("recharge");
  };
  let handleWithdraw = () => {
    console.log("withdraw");
  };
  let handleLogout = () => {
    setIsLoading(true)
    toLogout().then((res) => {
      localStorage.clear();
      setIsLoading(false)
      props.history.push("/login");
    });
  };
  return (
    <MyBox>
       {isLoading && <Loading/>}
      <div className="top">
        <NavBar
          back={null}
          left={<span>LOGO</span>}
          right={
            <>
              <UploadOutline
                fontSize={19}
                style={{ marginRight: 15 }}
                onClick={handleLogout}
              />
              <SetOutline fontSize={20} />
            </>
          }
        ></NavBar>
      </div>
      <MyContBoxTop>
        <div className="userInfo">
          <Image
            src={avtor}
            width={50}
            height={50}
            fit="cover"
            style={{ borderRadius: 50 }}
          />
          <div className="userInf">
            <div>{userInfo.name}</div>
            <div>
              <span>ID: MS215467391</span>
              <span>xxx coin: {store.getState().counter.userInfo.coin}</span>
            </div>
          </div>
        </div>
        <div>
          <div className="levelInfo">
            <div className="icons">
              {cards.map((item, index) => (
                <Image
                  src={item}
                  width={21}
                  height={21}
                  fit="cover"
                  key={index}
                />
              ))}
            </div>
            <div className="level">Level 4 environmentalist</div>
          </div>
          <div className="date">Term of validity: May,12,2023</div>
        </div>
      </MyContBoxTop>
      <MyContBox>
        <AssetsBox>
          <Title
            img={money}
            name="My assets"
            weight="bold"
            right={
              <span style={{ color: "#00B578", fontWeight: 500 }}>Details</span>
            }
          />
          <AssetsCard>
            <div className="price">
              <span>{userInfo.balance}</span>
              <span>USDT</span>
            </div>
            <div className="btns">
              <Button
                radius="10"
                content="Recharge"
                color="#fff"
                background="#00B578"
                height={38}
                width={90}
                className="rightBox"
                onClick={handleRecharge}
              />
              <Button
                radius="10"
                content="Withdraw"
                color="#fff"
                background="#4D4D4D"
                height={38}
                width={90}
                className="rightBox"
                onClick={handleWithdraw}
              />
            </div>
          </AssetsCard>
          <EarningCard>
            <Title
              name={<span style={{ color: "#fff" }}>Earnings</span>}
              weight="bold"
              right={
                <span style={{ color: "#00B578", fontWeight: 500 }}>
                  Earnings Details
                </span>
              }
            />
            <div className="bottomContent">
              <div>
                <div>21456.00</div>
                <div>Total</div>
              </div>
              <div>
                <div>367.00</div>
                <div>Today's</div>
              </div>
              <div>
                <div>647.00</div>
                <div>Yesterday's</div>
              </div>
            </div>
          </EarningCard>
        </AssetsBox>
        <InfoBox>
          <Title
            img={info}
            name="My Info"
            weight="bold"
            right={
              <span style={{ color: "#00B578", fontWeight: 500 }}>Edit</span>
            }
          />
          <InfoContent>
            <InfoItem>
              <MailFill />
              <span>msdgjk@gamil.com</span>
            </InfoItem>
            <InfoItem>
              <BankcardOutline />
              <span>{userInfo.phone}</span>
            </InfoItem>
          </InfoContent>
        </InfoBox>
      </MyContBox>
    </MyBox>
  );
};

export default TeamsPage;
