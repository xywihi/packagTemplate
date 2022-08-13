import React, { useState, useEffect, useRef } from "react";
import { Form, Input, Checkbox, Toast } from "antd-mobile";
import { Lable, FormItemBox, Buttons } from "./styled";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import Button from "@/common/Button";
import Loading from "@/common/Loading";
import { getCountry, toLogin, getUserInfo } from "@/api";
import { store, counterSlice } from "@/store";
const LoginEmail = ({ setMethod }) => {
  const [countries, setCountries] = useState({});
  const [isLoading, setIsLoading] = useState(false);

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
  function changeMethod(value) {
    setMethod(value);
  }
  return (
    <>
      {isLoading && <Loading />}
      <Form
        layout="horizontal"
        onFinish={onFinish}
        initialValues={{
          email: "",
          password: "",
        }}
        footer={
          <Buttons>
            <Button
              onClick={() => changeMethod("register")}
              className="btn"
              content="Register"
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
              content="Login"
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
            <span>E-mail</span>
            <span>Forget password</span>
          </Lable>
          <Form.Item
            name="email"
            rules={[{ required: true }, { validator: checkMobile }]}
          >
            <Input placeholder="Enter your email" />
          </Form.Item>
        </FormItemBox>
        <FormItemBox>
          <Lable>Password</Lable>
          <Form.Item name="password" rules={[{ required: true }]}>
            <Input type="password" placeholder="Enter your password" />
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

const getStoreData = (state) => {
  return {
    staticData: state.staticData.data,
  };
};
const dispatchAction = (dispatch, ownProps) => {
  return {};
};
export default connect(getStoreData, dispatchAction)(LoginEmail);
