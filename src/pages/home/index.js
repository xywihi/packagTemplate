import React, { useState, useRef, useEffect } from "react";
import { connect } from 'react-redux';
import {
  Input,
  Image,
  Space,
  Swiper,
  FloatingBubble,
  Toast,
} from "antd-mobile";
import {
  HomeBox,
  HomeInnerBoxFirst,
  HomeContentBox,
  NoticeBox,
  GetCionsBox,
  IconsTabBox,
  DonationBox,
  DonationContent,
  PioneerBox,
  PioneerContent,
  PioneerCard,
  ForestBox,
  ForestContent,
  SwiperItem,
  ForestItemDes,
  ModalContentBox,
  ModalTopCad,
  ModalContent,
  ModalButton,
  RadiuBox,
  Radiu,
  RadiuInner,
  TabBox,
} from "./styled";
import { useHistory } from "react-router-dom";
import { BellOutline, TeamOutline } from "antd-mobile-icons";
import level from "@/assets/icons/level.png";
import about from "@/assets/icons/about.png";
import recharge from "@/assets/icons/recharge.png";
import inivate from "@/assets/icons/inivate.png";
import water from "@/assets/icons/water.png";
import pioneer from "@/assets/icons/pioneer.png";
import ordinary from "@/assets/icons/ordinary.png";
import cactus from "@/assets/icons/cactus.png";
import grass from "@/assets/icons/grass.png";
import forest from "@/assets/icons/forest.png";
import pioneerVip from "@/assets/icons/pioneer-vip.png";
import swiper1 from "@/assets/images/swiper1.jpg";
import swiper2 from "@/assets/images/swiper2.jpg";
import swiper3 from "@/assets/images/swiper3.jpg";
import swiper4 from "@/assets/images/swiper4.jpg";
import grasses from "@/assets/images/grasses.png";
import hecai from "@/assets/images/hecai.png";
import Title from "@/common/title";
import TopNav from "@/common/TopNav";
import Button from "@/common/Button";
import Modals from "@/common/modals";
import Inivite from "@/common/inivate";
import Notice from "@/common/notice";
import { get } from "@/api/http";
import { store, counterSlice, homeDataSlice } from "@/store";
import {
  handleDonate,
  getDailyReward,
  handleLotteryNormal,
  handleLotterySuper,
} from "@/api";
import { getHomeData } from "@/api";
import Skeletons from "@/common/skeletons";
const HomePage = ({homeData,userInfo,handleUpdateData,lotteryNormal,getCions}) => {
  const [donateValue, setDonateValue] = useState("");
  const [swiperIndex, setSwiperIndex] = useState(0);
  const [showInivate, setShowInivate] = useState(false);
  const [num, setNum] = useState({ value: 0, done: false });
  const [cions, setCions] = useState({got: false });
  const [visible, setVisible] = useState({
    isvisible: false,
    type: "ordinary",
  });
  const icons = [
    { key: level, name: "Level", path: "/level" },
    { key: about, name: "About", path: "/about" },
    { key: recharge, name: "Recharge", path: "/recharge" },
    { key: inivate, name: "Inivate", path: "/inivate" },
  ];
  const colors = ["#ace0ff", "#bcffbd", "#e4fabd", "#ffcfac"];
  const swiperImgs = [swiper1, swiper2, swiper3, swiper4];
  const ref = useRef(null);
  const ref2 = useRef(null);
  const history = useHistory();
  const items = colors.map((color, index) => (
    <Swiper.Item key={index}>
      <SwiperItem
        bgImg={swiperImgs[index]}
        active={swiperIndex == index && "active"}
        onClick={() => {
          ref.current.swipeNext();
          console.log(ref.current);
        }}
      >
        <span>Forest{index + 1}</span>
        <div>
          <TeamOutline />
          <span>326</span>
        </div>
      </SwiperItem>
    </Swiper.Item>
  ));
  useEffect(() => {
    getHomeData().then((res) => {
      handleUpdateData(res);
      setCions({ got: false });
    });
  }, []);
  let getNum = (type) => {
    setVisible({ isvisible: true, type });
    // let timer = setInterval(() => {
    //     let newNum = Math.floor(Math.random() * 100);
    //     setNum({ ...num, value: newNum })
    // }, 50);
    handleLotteryNormal().then((res) => {
      let timer2 = setTimeout(() => {
        setNum((value) => ({ value: res.award, done: true }));
        lotteryNormal({ coin: res.coin, award: res.award });
        // clearInterval(timer);
        clearTimeout(timer2);
      }, 1200);

      // store.dispatch(counterSlice.actions.update(res));
    });
  };
  let handleGetCions = () => {
    let oldCions = Number(homeData.user_stat.total);
    oldCions += Number(homeData.user_stat.daily);
    console.log(homeData,oldCions)
    getCions(oldCions.toFixed(2))
    setCions({ cion: oldCions, got: true });
    // getDailyReward().then((res) => {
    //   getCions(oldCions.toFixed(2))
    //   setCions({ cion: oldCions, got: true });
    // });
  };
  let handScroll = (e) => {
    if (e.target.scrollTop > 30) {
      ref2.current.style.background = "#fff";
      ref2.current.style.color = "#333";
      ref2.current.style.boxShadow = "0px 2px 10px #ececec";
    } else {
      ref2.current.style.background = "none";
      ref2.current.style.color = "#fff";
      ref2.current.style.boxShadow = "none";
    }
  };
  let goInnerPage = (path) => {
    history.push(path);
  };
  return homeData ? (
    <HomeBox onScroll={handScroll}>
      <div className="top" ref={ref2}>
        <TopNav back={null} left={<span>LOGO</span>} right="English" />
      </div>
      <HomeInnerBoxFirst>
        <HomeContentBox>
          <NoticeBox>
            <Notice notices={homeData.notice} />
          </NoticeBox>
          <GetCionsBox got={cions.got}>
            <div className="leftBox">
              <div className="top">
                <span className="topLeft">
                  <span>{homeData.user_stat.total}</span>
                  <span>USDT</span>
                </span>
                <span className="topRight">
                  +{homeData.user_stat.daily} every day
                </span>
                <span className="topRight_got">Got it today</span>
              </div>
              <div className="bot">
                Remember to come and receive this every day!
              </div>
            </div>
            <Button
              disable={cions.got}
              radius="10"
              content="Get"
              color="#fff"
              background="#00B578"
              height={48}
              width={48}
              className="rightBox"
              onClick={()=>handleGetCions(homeData.user_stat)}
            >
              Get
            </Button>
          </GetCionsBox>
          <IconsTabBox>
            <Space block wrap>
              {icons.map((item) => (
                <div
                  className="iconBox"
                  key={item.name}
                  onClick={() =>
                    item.name === "Inivate"
                      ? setShowInivate(true)
                      : goInnerPage(item.path)
                  }
                >
                  <Image
                    src={item.key}
                    width={64}
                    height={64}
                    fit="cover"
                    style={{ borderRadius: 32 }}
                  />
                  <span className="iconName">{item.name}</span>
                </div>
              ))}
            </Space>
          </IconsTabBox>
          <DonationBox>
            <Title img={water} name="Donation area" weight="bold" />
            <DonationContent>
              <Input
                placeholder="Enter your amount"
                value={donateValue}
                onChange={(val) => {
                  setDonateValue(val);
                }}
                className="donationInp"
              />
              <Button
                className="donateBtn"
                content="Donate"
                radius="50"
                background="#1AFFB2"
                height={44}
                width={86}
                onClick={() => handleDonate(donateValue)}
              />
            </DonationContent>
          </DonationBox>
          <PioneerBox>
            <Title img={pioneer} name="Pioneer Paradise" weight="bold" />
            <PioneerContent>
              <PioneerCard bgImg={cactus}>
                <Title
                  img={ordinary}
                  width={15}
                  height={15}
                  name="Ordinary lottery"
                  fit="cover"
                  fontSize={13}
                />
                <span className="des">
                  Use 100u ,you will have the opportunity to get 3-100u.
                </span>
                <Button
                  radius="10"
                  onClick={() => {
                    getNum("ordinary");
                  }}
                  className="btn"
                  content="Play"
                  color="#fff"
                  background="#00B578"
                  width={40}
                  height={24}
                />
              </PioneerCard>
              <PioneerCard bgImg={grass}>
                <Title
                  img={pioneerVip}
                  width={15}
                  height={15}
                  name="Pioneer lottery"
                  fit="cover"
                  fontSize={13}
                />
                <span className="des">
                  The higher the level of pioneer, the richer the prize.
                </span>
                <Button
                  radius="10"
                  onClick={() => {
                    getNum("vip");
                  }}
                  className="btn"
                  content="Play"
                  color="#fff"
                  background="#00B578"
                  width={40}
                  height={24}
                />
              </PioneerCard>
            </PioneerContent>
          </PioneerBox>

          <ForestBox>
            <Title
              img={forest}
              name="All forests"
              weight="bold"
              right={
                <>
                  <TeamOutline />
                  <span>
                    {homeData.forest.reduce((prev, curr) => {
                      return (prev.people ? prev.people : prev) + curr.people;
                    })}
                  </span>
                </>
              }
            />
            <ForestContent>
              <Swiper
                ref={ref}
                onIndexChange={(index) => setSwiperIndex(index)}
                stuckAtBoundary={false}
                trackOffset={0}
                slideSize={60}
                defaultIndex={swiperIndex}
                loop
              >
                {homeData.forest.map((item, index) => (
                  <Swiper.Item key={index}>
                    <SwiperItem
                      bgImg={item.cover}
                      active={swiperIndex == index && "active"}
                      onClick={() => {
                        ref.current.swipeNext();
                        console.log(ref.current);
                      }}
                    >
                      <span>{item.name}</span>
                      <div>
                        <TeamOutline />
                        <span>{item.people}</span>
                      </div>
                    </SwiperItem>
                  </Swiper.Item>
                ))}
              </Swiper>
              <ForestItemDes>{homeData.forest[swiperIndex].desc}</ForestItemDes>
            </ForestContent>
          </ForestBox>
        </HomeContentBox>
      </HomeInnerBoxFirst>
      <FloatingBubble
        axis="xy"
        magnetic="x"
        style={{
          "--initial-position-bottom": "68px",
          "--initial-position-right": "12px",
          "--edge-distance-bottom": "60px",
          "--background": "none",
          "--border-radius": "0%",
          "--size": "100px",
          alignItems: "end",
        }}
      >
        <RadiuBox count={userInfo.energy}>
          <Image
            src={grasses}
            width={40}
            height={40}
            fit="cover"
            className="grassesImg"
          />
          <div className="waters">
            <Radiu></Radiu>
            <RadiuInner></RadiuInner>
          </div>
        </RadiuBox>
      </FloatingBubble>
      <Modals
        type="action"
        width={295}
        height={226}
        visible={visible.isvisible}
      >
        <ModalContentBox finish={num.done} type={visible.type}>
          <Image
            src={hecai}
            width={280}
            height={166}
            fit="cover"
            className="hecaiImg"
          />
          <ModalTopCad>
            <span>{num.value}</span>
            <span>USDT</span>
          </ModalTopCad>
          <ModalContent>
            <p>
              Congratulations on winning the above rewards through the ordinary
              lottery!!!
            </p>
            <p>Use 100u ,you will have the opportunity to get 3-100u.</p>
          </ModalContent>
          <ModalButton
            onClick={() => {
              setVisible({ isvisible: false, type: "" });
              setNum({ ...num, done: false });
            }}
          >
            Okay
          </ModalButton>
        </ModalContentBox>
      </Modals>
      <Inivite showInivate={showInivate} setShowInivate={setShowInivate} />
    </HomeBox>
  ) : <Skeletons />
};
const getStoreData=(state)=>{
  console.log(state,'获得了store的数据')
  return {
    userInfo:state.counter.userInfo,
    homeData:state.homeData.data
  }
}
const dispatchAction=(dispatch,ownProps)=>{
  return {
    handleUpdateData:(data)=>dispatch(homeDataSlice.actions.getdata(data)),
    lotteryNormal:(data)=>dispatch(counterSlice.actions.editCoin(data)),
    getCions:(data)=>dispatch(homeDataSlice.actions.editTotal(data)),
  }
}
export default connect(getStoreData,dispatchAction)(HomePage) ;
