import React, { useState, useEffect, useRef } from "react";
import { Image, Tabs, Swiper } from "antd-mobile";
import {
  TabBox,
  SuccessorsBox,
  SuccessorCard,
  RankingTeam,
  RankingTeamItem,
} from "./styled";
import avtor1 from "@/assets/images/avtor1.png";
import avtor2 from "@/assets/images/avtor2.png";
import avtor3 from "@/assets/images/avtor3.png";
import avtor4 from "@/assets/images/avtor4.png";
import avtor5 from "@/assets/images/avtor5.png";
import avtor6 from "@/assets/images/avtor6.png";
import { LeftOutline, TeamOutline } from "antd-mobile-icons";
import { useHistory } from "react-router-dom";
import TopNav from "@/common/TopNav";
import { getTeamsDetail } from "@/api";
import LevelIcons from "@/common/LevelIcons";
import {connect} from 'react-redux';
import { t } from "i18next";
const Successors = () => {
  const history = useHistory();
  const avtors = [avtor1, avtor2, avtor3, avtor4, avtor5, avtor6];
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [detailData, setDetailData] = useState();
  const [tabItems, setTabItems] = useState([]);
  useEffect(() => {
    getTeamsDetail().then((res) => {
      let newTabItems = Object.keys(res).map((item) => {
        switch (item) {
          case 1:
            return { key: item + "st", title: item + "st level" };
          case 2:
            return { key: item + "nd", title: item + "nd level" };
          case 3:
            return { key: item + "st", title: item + "st level" };

          default:
            return { key: item + "th", title: item + "th level" };
        }
      });
      setTabItems(newTabItems);
      setDetailData(res);
      
      let currentIndex = history.location.state.level - 1;
      setActiveIndex(currentIndex);
      swiperRef.current?.swipeTo(currentIndex);
    });
  }, []);
  let toBack = () => {
    history.goBack();
  };
  return detailData ? (
    <SuccessorsBox>
      <div className="top">
        <TopNav
          back={null}
          left={
            <span style={{ fontWeight: "bold" }}>
              <LeftOutline onClick={toBack} />
              {t("successor")}
            </span>
          }
          right="English"
        />
      </div>
      <TabBox>
        <Tabs
          activeKey={tabItems[activeIndex].key}
          onChange={(key) => {
            const index = tabItems.findIndex((item) => item.key === key);
            setActiveIndex(index);
            swiperRef.current?.swipeTo(index);
          }}
          style={{
            "--active-title-color": "#333",
            "--active-line-height": "0",
          }}
        >
          {tabItems.map((item) => (
            <Tabs.Tab title={item.title} key={item.key} />
          ))}
        </Tabs>
        <Swiper
          direction="horizontal"
          loop
          indicator={() => null}
          ref={swiperRef}
          defaultIndex={activeIndex}
          onIndexChange={(index) => {
            setActiveIndex(index);
          }}
        >
          {tabItems.map((element) => (
            <Swiper.Item key={element.key}>
              <SuccessorCard>
                <div className="title">
                  <span>
                    {element.key} {t("t_levelSuccessor")}
                  </span>
                  <div>
                    <span>{detailData[activeIndex + 1].length}</span>
                    <span>
                      <TeamOutline />
                    </span>
                  </div>
                </div>
                <div className="avtors">
                  {detailData[activeIndex + 1].map((item, index) => (
                    <Image
                      src={'/avatar/'+item.user.avatar+'.png'}
                      width={30}
                      height={30}
                      fit="cover"
                      key={item.user_id}
                      style={{ borderRadius: 50 }}
                    />
                  ))}
                </div>
              </SuccessorCard>
              <RankingTeam>
                <RankingTeamItem style={{ marginBottom: "10px" }}>
                  <span style={{ fontWeight: "bold" }}>{t("t_ranking")} </span>
                </RankingTeamItem>
                <RankingTeamItem style={{ color: "#B58E0F" }}>
                  <span>ID</span>
                  <span>{t("t_level")}</span>
                </RankingTeamItem>
                {detailData[activeIndex + 1].map((item) => (
                  <RankingTeamItem key={item.user_id}>
                    <div className="id">
                      <span>{item.user.phone}</span>
                    </div>
                    <LevelIcons level={1}/>
                  </RankingTeamItem>
                ))}
              </RankingTeam>
            </Swiper.Item>
          ))}
        </Swiper>
      </TabBox>
    </SuccessorsBox>
  ) : (
    <LevelIcons />
  );
};

const getStoreData=(state)=>{
    return {
        staticData:state.staticData.data
    }
  }
  const dispatchAction=(dispatch)=>{
    return {
        handleUpdateData:(data)=>dispatch(teamDataSlice.actions.getdata(data)),
      
    }
  }
  export default connect(getStoreData,dispatchAction)(Successors) ;
