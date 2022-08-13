import React, { useState, useEffect, useRef } from "react";
import { Form, Input, Checkbox, Toast, Space, Picker } from "antd-mobile";
import { Lable, FormItemBox, Buttons } from "./styled";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import Button from "@/common/Button";
import Loading from "@/common/Loading";
import { DownOutline } from "antd-mobile-icons";
import { getCountry, toLogin, getUserInfo } from "@/api";
import { store, counterSlice } from "@/store";
const RegisterPhone = ({ setMethod }) => {
  const [countries, setCountries] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const ref = useRef();
  const history = useHistory();
  useEffect(async () => {
    // let token = localStorage.getItem('token');
    // if (token) history.push('/home');
    getCountry().then((res) => setCountries(res));
    return () => {
      // login.abort();
    };
  }, []);
  const onFinish = (values, key) => {
    let parameter;
    let currentCode;
    setIsLoading(true);
    switch (key) {
      case "login":
        currentCode = values.phone.country_code;
        parameter = { ...values };
        delete parameter.country_code;
        delete parameter.isRead;
        parameter["phone"] = currentCode + values.phone.phone;
        toLogin({ ...parameter })
          .then((res) => {
            console.log(res, "uuuuuuuu");
            let token = res.token;
            if (token) {
              localStorage.setItem("token", token);
              getUserInfo().then((res) => {
                store.dispatch(counterSlice.actions.getData(res));
                setIsLoading(false);
                history.push("/home");
              });
            }
          })
          .catch((err) => console.log(err))
          .finally(() => setIsLoading(false));

        break;

      default:
        parameter = { ...values };
        currentCode = values.phone.country_code;
        parameter["country_code"] = countries[currentCode];
        parameter["phone"] = currentCode + values.phone.phone;
        delete parameter.confirmPasswords;
        delete parameter.isRead;
        post("/client/register", { ...parameter }).catch((res) => {
          Toast.show({
            content: res,
            position: "top",
          });
        });
        break;
    }
    //
  };
  const checkMobile = (_, value) => {
    if (value.phone) {
      return Promise.resolve();
    }
    return Promise.reject(new Error("Mobile number cannot be empty!"));
  };
  const checkRead = (_, value) => {
    if (value) {
      return Promise.resolve();
    }
    return Promise.reject(new Error("Consent clause required!"));
  };
  const checkPassword = (_, value) => {
    let frontPasswords = ref.current.getFieldValue("password");
    if (value == frontPasswords) {
      return Promise.resolve();
    }
    return Promise.reject(new Error("Passwords are inconsistent!"));
  };
  function changeMethod(value) {
    setMethod(value);
  }
  return (
    <>
      {isLoading && <Loading />}
      <Form
        ref={ref}
        layout="horizontal"
        onFinish={(e) => onFinish(e, "register")}
        initialValues={{
          phone: { country_code: "20", phone: "" },
          password: "",
          confirmPasswords: "",
          verify_code: "",
          invite_code: "",
        }}
        footer={
          <Buttons>
            <Button
              onClick={() => changeMethod("login")}
              className="btn"
              content="Login"
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
              content="Register"
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
        <FormItemBox>
          <Lable>
            <span>Telephone Number</span>
          </Lable>
          <Form.Item
            name="phone"
            rules={[{ required: true }, { validator: checkMobile }]}
          >
            <MobileField columns={[Object.keys(countries)]} />
          </Form.Item>
        </FormItemBox>
        <FormItemBox>
          <Lable>Password</Lable>
          <Form.Item name="password" rules={[{ required: true }]}>
            <Input type="password" placeholder="Enter your password" />
          </Form.Item>
        </FormItemBox>
        <FormItemBox>
          <Lable>Confirm Password</Lable>
          <Form.Item
            name="confirmPasswords"
            rules={[{ required: true }, { validator: checkPassword }]}
          >
            <Input type="password" placeholder="Enter your password again" />
          </Form.Item>
        </FormItemBox>
        <FormItemBox>
          <Lable>
            <span>Verify Code</span> <span>Get Verification Code</span>
          </Lable>
          <Form.Item name="verify_code" rules={[{ required: true }]}>
            <Input placeholder="Enter your verify code" />
          </Form.Item>
        </FormItemBox>
        <FormItemBox>
          <Lable>Invite Code</Lable>
          <Form.Item name="invite_code">
            <Input placeholder="Enter your password again" />
          </Form.Item>
        </FormItemBox>
        <Form.Item
          className="read"
          name="isRead"
          rules={[{ validator: checkRead }]}
        >
          <Checkbox
            value="small"
            style={{
              "--icon-size": "14px",
              "--font-size": "12px",
              "--gap": "6px",
            }}
          >
            Agreement terms of the rules
          </Checkbox>
        </Form.Item>
      </Form>
    </>
  );
};
const MobileField = ({
  columns,
  value = { country_code: "20", phone: "" },
  onChange,
}) => {
  const [visible, setVisible] = useState(false);
  const triggerValue = (changedValue) => {
    onChange === null || onChange === void 0
      ? void 0
      : onChange(Object.assign(Object.assign({}, value), changedValue));
  };
  const onRealValueChange = (value) => {
    triggerValue({ phone: value });
  };
  const onPreValueChange = (value) => {
    const v = value[0];
    if (v === null) return;
    triggerValue({ country_code: v });
  };
  return (
    <>
      <Space align="center">
        <Space align="center" onClick={() => setVisible(true)}>
          <div>+{value.country_code}</div>
          <DownOutline />
        </Space>
        <Input
          placeholder="Enter your telephone number"
          value={value.phone}
          onChange={onRealValueChange}
        />
      </Space>
      <Picker
        columns={columns}
        visible={visible}
        onClose={() => {
          setVisible(false);
        }}
        value={[value.country_code]}
        onConfirm={onPreValueChange}
      />
    </>
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
export default connect(getStoreData, dispatchAction)(RegisterPhone);
