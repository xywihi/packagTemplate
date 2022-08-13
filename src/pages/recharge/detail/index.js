import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import historyIcon from "@/assets/icons/history.png";
import {
  RechargeBox,
  RechargeContent,
  HistoryBox,
  HistoryItem,
  HistoryList,
  HistoryContentBox,
  TitleRightBox,
} from "./styled";
import TopNav from "@/common/TopNav";
import Title from "@/common/title";
import { Picker, DatePicker, InfiniteScroll, DotLoading, PullToRefresh } from "antd-mobile";
import { sleep } from 'antd-mobile/es/utils/sleep'
import {
  DownFill,
  ClockCircleOutline,
  BillOutline,
  LeftOutline,
} from "antd-mobile-icons";
import Button from "@/common/Button";
import { getRechargeRecord, getFundRecord } from "@/api";
import { t } from "i18next";
const RechargeDetail = ({ history }) => {
  const [visible, setVisible] = useState(false);
  const [showTypes, setShowTypes] = useState(false);
  const [dateYear, setDateYear] = useState(new Date());
  const [currentPage, setCurrentPage] = useState(0);
  const [currentType, setCurrentType] = useState("all");
  const [histories, setHistories] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const types = [
    [
      { value: "all", label: t("r_all") },
      { value: "star_day_award", label: t("r_star_day_award") },
      { value: "draw_award", label: t("r_draw_award") },
      { value: "pioneer_day_award", label: t("r_pioneer_day_award") },
      { value: "buy_guardian", label: t("r_buy_guardian") },
      { value: "recharge", label: t("r_recharge") },
      { value: "withdraw_apply", label: t("r_withdraw_apply") },
      { value: "withdraw_fund", label: t("r_withdraw_fund") },
      { value: "withdraw_pass", label: t("r_withdraw_pass") },
      { value: "register_award", label: t("r_register_award") },
      {
        value: "invite_super_parent_award",
        label: t("r_invite_super_parent_award"),
      },
      { value: "invite_parent_award", label: t("r_invite_parent_award") },
    ],
  ];
  useEffect(() => {
    setHistories([]);
    setCurrentPage(0);
  }, [dateYear, currentType]);
  let handleRecharge = () => {
    console.log("recharge");
  };
  let handleWithdraw = () => {
    console.log("withdraw");
  };
  let toBack = () => {
    history.goBack();
  };
  async function loadMore() {
    let data = await getFundRecord({
      page: currentPage + 1,
      type: currentType,
      time:
        dateYear.getFullYear() +
        "-" +
        (dateYear.getMonth() + 1) +
        "-" +
        dateYear.getDate(),
    });
    setHistories((val) => [...val, ...data.data]);
    setCurrentPage(data.current_page);
    setHasMore(data.data.length > 0);
  }
  return (
    <RechargeBox>
      <div className="top">
        <TopNav
          back={null}
          left={
            <span style={{ fontWeight: "bold" }}>
              <LeftOutline onClick={toBack} />
              {t("r_detail")}
            </span>
          }
          right="English"
        />
      </div>
      <RechargeContent>
        <HistoryBox>
          <Title
            className="historyTitle"
            img={historyIcon}
            name={t("r_history")}
            weight="bold"
            right={
              <TitleRightBox>
                <div onClick={() => setShowTypes(true)}>
                  <DownFill />
                  {
                    types[0].filter((item) => item?.value == currentType)[0]
                      .label
                  }
                </div>
                <div onClick={() => setVisible(true)}>
                  <span>
                    <DownFill />
                    {dateYear.toDateString().split(" ")[1]}-
                    {dateYear.toDateString().split(" ")[2]}
                  </span>
                  <span>
                    <DownFill />
                    {dateYear.getFullYear()}
                  </span>
                </div>
              </TitleRightBox>
            }
          />
          <PullToRefresh
          headHeight={20}
          pullingText={t('r_tofresh')}
          refreshingText={t('r_loading')+'...'}
          canReleaseText={t('r_canReleaseText')+'...'}
          completeText={t('r_completeText')}
            onRefresh={async () => {
              await sleep(1000);
              setHistories([]);
              setCurrentPage(0);
            }}
          >
            <HistoryContentBox>
            <HistoryList>
              <HistoryItem style={{ color: "#B6B6B6" }}>
                <div>
                  <ClockCircleOutline />
                  <span>{t("r_time")}</span>
                </div>
                <div>
                  <BillOutline />
                  <span>{t("r_money")}</span>
                </div>
              </HistoryItem>
              {histories.map((item) => (
                <HistoryItem key={item.id}>
                  <div className="time">
                    <span>{item.created_at.split(" ")[0]}</span>
                    <span>{item.created_at.split(" ")[1]}</span>
                  </div>
                  <div className="money">{item.amount}</div>
                </HistoryItem>
              ))}
            </HistoryList>
            <InfiniteScroll
              loadMore={loadMore}
              threshold={80}
              hasMore={hasMore}
              children={(hasMore, failed, retry) =>
                failed ? (
                  <div>Error</div>
                ) : hasMore ? (
                  <div>
                    Loading
                    <DotLoading color="#00B578" />
                  </div>
                ) : (
                  <div>Not more data</div>
                )
              }
            />
          </HistoryContentBox>
          </PullToRefresh>
          
        </HistoryBox>
      </RechargeContent>
      <Picker
        columns={types}
        visible={showTypes}
        onClose={() => {
          setShowTypes(false);
        }}
        value={currentType}
        onConfirm={(v) => {
          setHistories([]);
          setCurrentPage(0);
          setCurrentType(v[0]);
        }}
      />
      <DatePicker
        visible={visible}
        onClose={() => {
          setVisible(false);
        }}
        onConfirm={(val) => {
          setDateYear(val);
        }}
        max={new Date()}
      />
    </RechargeBox>
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
export default connect(getStoreData, dispatchAction)(RechargeDetail);
