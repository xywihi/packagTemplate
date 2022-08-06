import React from "react";
import {
  Form,
} from "antd-mobile";
import { connect } from "react-redux";
import { Buttons,FormBox } from "./styled";
import Button from "@/common/Button";
import { counterSlice } from "@/store";
const EditForm = ({ children,userInfo, handleUpdateData,closePopup, ...props }) => {
  let onFinish = (e) => {
    let newData=JSON.parse(JSON.stringify(userInfo))
    handleUpdateData({...newData,...e});
  };
  return (
    <FormBox>
      <Form
        layout="horizontal"
        onFinish={(e) => {onFinish(e);closePopup({show:false,content:null})}}
        initialValues={{
          ...props,
        }}
        footer={
          <Buttons>
            <Button
              onClick={() => closePopup({show:false,content:null})}
              className="btn"
              content="Close"
              color="#333"
              size="16"
              radius="10"
              background="#E2E2E2"
              width={113}
              height={48}
            />
            <Button
              type="submit"
              className="btn"
              content="Ok"
              color="#fff"
              size="16"
              radius="10"
              background="#00B578"
              width={113}
              height={48}
            />
          </Buttons>
        }
      >
        {children}
      </Form>
    </FormBox>
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

export default connect(getStoreData, dispatchAction)(EditForm);
