import React, { useState, useEffect, useRef } from "react";
import { t } from "i18next";

import {
  Toast,
  Form,
  Input,
  InfiniteScroll,
  DotLoading,
  DatePicker,
} from "antd-mobile";
import {
  LeftOutline,
  DownFill,
  ClockCircleOutline,
  BillOutline,
} from "antd-mobile-icons";
import TopNav from "@/common/TopNav";
import {
  InfoSetsBox,
  HistoryBox,
  HistoryContentBox,
  HistoryList,
  HistoryItem,
} from "./styled";
import { connect } from "react-redux";
import { store } from "@/store";
import { handleWithdraw, getWithdrawalRecord } from "@/api";
import Button from "@/common/Button";
import Title from "@/common/title";

import historyIcon from "@/assets/icons/history.png";
const formStyle = {
  //  background:'red'
};

const withdrawPage = ({ history }) => {
  const [visible, setVisible] = useState(false);
  const [dateYear, setDateYear] = useState(new Date());
  const [data, setData] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [histories, setHistories] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [amount, setAmount] = useState(100);
  const [address, setAddress] = useState("");

  const form = useRef("");
  useEffect(() => {
    setHistories([]);
    setCurrentPage(0);
  }, [dateYear]);
  let toBack = () => {
    history.goBack();
  };
  async function loadMore() {
    let data = await getWithdrawalRecord({
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

  const onFinish = (values) => {
    let balance = store.getState().counter.userInfo.balance;

    if (parseFloat(values.amount) > parseFloat(balance)) {
      Toast.show({
        icon: "fail",
        content: t("no_enough_balance"),
        position: "top",
      });
      return;
    }

    handleWithdraw({ ...values }).then((res) => {
      if (res.code == 200) {
        form.current.resetFields();
      }
    });
  };

  return (
    <InfoSetsBox>
      <div className="top">
        <TopNav
          back={null}
          left={
            <span style={{ fontWeight: "bold" }}>
              <LeftOutline onClick={toBack} />
              {t("withdraw")}
            </span>
          }
          right="English"
        />
      </div>
      <div
        style={{ marginBottom: "10px", marginTop: "64px", textAlign: "center" }}
      >
        Logo
      </div>
      <div style={formStyle}>
        <Form
          layout="horizontal"
          ref={form}
          onFinish={(e) => onFinish(e)}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            background: "#f3f3f3",
            padding: "20px 0 10px 0",
            borderRadius: "10px",
          }}
          footer={
            <Button
              radius="10"
              content={t("submit")}
              color="#fff"
              background="#00B578"
              height={38}
              width={90}
              style={{ margin: "0 auto" }}
              type="submit"
              className="submit"
            />
          }
        >
          <Form.Item
            name="amount"
            label={t('m_amount')}
            rules={[{ required: true, message: "please enter amount" }]}
          >
            <Input
              onChange={(e) => setAmount(e)}
              placeholder="USDT"
              type="number"
            />
          </Form.Item>

          <Form.Item
            name="address"
            label={t('m_address')}
            rules={[
              { required: true, message: "please enter your wallet address" },
            ]}
          >
            <Input
              onChange={(e) => setAddress(e)}
              placeholder="wallet address"
            />
          </Form.Item>
        </Form>
      </div>
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
    </InfoSetsBox>
  );
};

const getStoreData = (state) => {
  return {
    userInfo: state.counter.userInfo,
    staticData: state.staticData.data,
  };
};
const dispatchAction = (dispatch, ownerProps) => {
  return {
    handleUpdateData: (data) =>
      dispatch(counterSlice.actions.updateUserInfo(data)),
  };
};

export default connect(getStoreData, dispatchAction)(withdrawPage);
