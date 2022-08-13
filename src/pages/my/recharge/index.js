import React, { useState, useEffect } from "react";
import { t } from "i18next";
import {Toast} from "antd-mobile";
import { LeftOutline } from "antd-mobile-icons";
import TopNav from "@/common/TopNav";
import { InfoSetsBox } from "./styled";
import { connect } from "react-redux";
import { handleGetWallet } from "@/api";
import copy from 'copy-to-clipboard';
import QRCode from "qrcode.react";
import Button from "@/common/Button";
const cardStyle = {
  background: "#f3f3f3",
  color: "#02B578",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding:'20px 0',
  borderRadius:'10px'
};
const tipStyle = {
  color: "red",
  marginTop:'20px',
  background:'aliceblue',
  padding:'10px',
  borderRadius:'10px'
};

const rechargePage = ({ history }) => {
  const [address, setAddress] = useState("");
  let toBack = () => {
    history.goBack();
  };
  useEffect(() => {
    handleGetWallet().then((res) => {
      setAddress(res);
    });
  }, []);

  const handleCopy = (address) => {
    copy(address)
    Toast.show({
        content: t('copy_success'),
        position: "top",
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
              {t("recharge")}
            </span>
          }
          right="English"
        />
      </div>
      <div style={{marginBottom:'20px',  marginTop: "64px",textAlign:'center'}}>Logo</div>
      <div style={cardStyle}>
        
        <QRCode
          value={{ address }} // 生成二维码的内容
          size={200} // 二维码的大小
          fgColor="#000000" // 二维码的颜色  src:logo
          imageSettings={{
            height: 60,
            width: 60,
            excavate: true,
          }}
        />

        <div style={{ margin: "20px 0" }}>{address}</div>

        <Button
          radius="10"
          content={t("copy")}
          color="#fff"
          background="#00B578"
          height={38}
          width={90}
          className="rightBox"
          onClick={()=>handleCopy(address)}
        />
      </div>
      <div style={tipStyle}>
        {/* <p style={{margin:'10px'}}>1. Please copy the address or scan qrcode</p> */}
        <p style={{margin:'10px'}}>1. {t('m_TRON')}</p>
        <p style={{margin:'10px'}}>2. {t('m_makeSure')}</p>
      </div>
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

export default connect(getStoreData, dispatchAction)(rechargePage);
