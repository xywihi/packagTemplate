import React, { useState } from "react";
import { t } from "i18next";
import { List, Avatar, Popup, Modal, Input, Toast, Form } from "antd-mobile";
import {
  UserCircleOutline,
  CameraOutline,
  LeftOutline,
} from "antd-mobile-icons";
import TopNav from "@/common/TopNav";
import {
  InfoSetsBox,
  InfoSetsContentBox,
  AvatarsBox,
  AvatarListBox,
  FormItemBox,
  Lable
} from "./styled";
import { connect } from "react-redux";
import avtor from "@/assets/images/avtor.png";
import Title from "@/common/title";

import avatars from "@/assets/avatar";
import { counterSlice } from "@/store";
import EditForm from "./component/EditForm";
const InfoSets = ({ history, userInfo, handleUpdateData }) => {
  const [visible, setVisible] = useState({ show: false, content: null });
  const [avatar, setAvatar] = useState(avtor);
  let toBack = () => {
    history.goBack();
  };
  return (
    <InfoSetsBox>
      <div className="top">
        <TopNav
          back={null}
          left={
            <span style={{ fontWeight: "bold" }}>
              <LeftOutline onClick={toBack} />
              {t("set")}
            </span>
          }
        />
      </div>

      <InfoSetsContentBox>
        <List header={t("ms_info")}>
          <List.Item
            prefix={<CameraOutline />}
            extra={<Avatar src={'/avatar/'+userInfo.avatar+'.png'} style={{ "--size": "32px" }} />}
            onClick={() =>
              setVisible({
                show: true,
                content: (
                  <AvatarsBox>
                    <Title name={t("ms_select")} weight="bold" />
                    <AvatarListBox>
                      {Object.values(avatars).map((item, index) => (
                        <Avatar
                          src={item}
                          style={{ "--size": "14%" }}
                          onClick={() => {
                            setAvatar(item);
                            setVisible({show:false,content:null})
                          }}
                        />
                      ))}
                      {Object.values(avatars).length % 7 != 0 && (
                        <div style={{ flex: 1 }}></div>
                      )}
                    </AvatarListBox>
                  </AvatarsBox>
                ),
              })
            }
          >
            {t("ms_avatar")}
          </List.Item>
          <List.Item
            prefix={<UserCircleOutline />}
            extra={userInfo.name}
            onClick={() =>
              setVisible({
                show: true,
                content: (
                  <EditForm {...userInfo} closePopup={setVisible}>
                    <FormItemBox>
                    <Lable>Name</Lable>
                      <Form.Item name="name">
                        <Input placeholder="请输入姓名" />
                      </Form.Item>
                    </FormItemBox>
                  </EditForm>
                ),
              })
            }
          >
            {t("ms_name")}
          </List.Item>
        </List>
      </InfoSetsContentBox>
      <Popup
        visible={visible.show}
        onMaskClick={() => {
          setVisible(false);
        }}
        bodyStyle={{
          borderTopLeftRadius: "8px",
          borderTopRightRadius: "8px",
          minHeight: "40vh",
        }}
      >
        {visible.content}
      </Popup>
    </InfoSetsBox>
  );
};

const getStoreData = (state) => {
  return {
    userInfo: state.counter.userInfo,
  };
};
const dispatchAction = (dispatch, ownerProps) => {
  return {
    handleUpdateData: (data) =>
      dispatch(counterSlice.actions.updateUserInfo(data)),
  };
};

export default connect(getStoreData, dispatchAction)(InfoSets);
