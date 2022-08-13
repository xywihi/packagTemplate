import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import assets from "@/assets/icons/assets.png";
import historyIcon from "@/assets/icons/history.png";
import {
  RechargeBox,
  RechargeContent,
  AssetsBox,
  HistoryBox,
  AssetsCard,
  HistoryItem,
  HistoryList,
  HistoryContentBox,
} from "./styled";
import TopNav from "@/common/TopNav";
import Title from "@/common/title";
import { DatePicker, InfiniteScroll, DotLoading } from "antd-mobile";
import { ClockCircleOutline, BillOutline, DownFill } from "antd-mobile-icons";
import Button from "@/common/Button";
import { getFundRecord, getRechargeRecord } from "@/api";
import { t } from "i18next";
const Recharge = ({ history, userInfo }) => {
  const [visible, setVisible] = useState(false);
  const [dateYear, setDateYear] = useState(new Date());
  const [currentPage, setCurrentPage] = useState(0);
  const [histories, setHistories] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  useEffect(() => {
    setHistories([]);
    setCurrentPage(0);
  }, [dateYear]);
  let handleRecharge = () => {
    history.push("/my/recharge");
  };
  let handleWithdraw = () => {
    history.push("/my/withdraw");
  };
  let toDetail = () => {
    history.push("/recharge/detail");
  };
  async function loadMore() {
    let data = await getRechargeRecord({
      page: currentPage + 1,
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
        <TopNav back={null} left={<span>LOGO</span>} right="English" />
      </div>
      <RechargeContent>
        <AssetsBox>
          <Title
            img={assets}
            name={t("r_assets")}
            weight="bold"
            right={
              <span
                onClick={toDetail}
                style={{ color: "#00B578", fontWeight: 500 }}
              >
                {t("r_detail")}
              </span>
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
                content={t("r_recharge")}
                color="#fff"
                background="#00B578"
                height={38}
                width={90}
                className="rightBox"
                onClick={handleRecharge}
              />
              <Button
                radius="10"
                content={t("r_withdraw")}
                color="#fff"
                background="#4D4D4D"
                height={38}
                width={90}
                className="rightBox"
                onClick={handleWithdraw}
              />
            </div>
          </AssetsCard>
        </AssetsBox>
        <HistoryBox>
          <Title
            className="historyTitle"
            img={historyIcon}
            name={t("r_history")}
            weight="bold"
            right={
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
            }
          />
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
        </HistoryBox>
      </RechargeContent>
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
    userInfo: state.counter.userInfo,
  };
};
const dispatchAction = (dispatch, ownProps) => {
  return {};
};
export default connect(getStoreData, dispatchAction)(Recharge);
