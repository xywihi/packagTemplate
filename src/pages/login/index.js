import React, { useState, useEffect, useRef } from 'react';
import { Image, SpinLoading, Form, Input, Space, Picker, Checkbox, Toast } from 'antd-mobile';
import {
    LoginBox,
    LoginInnerBoxFirst,
    LoginContentBox,
    DesBox,
    DesBigItem,
    DesSmallItem,
    TabBox,
    Lable,
    FormItemBox,
    Buttons,
    TopType
} from './styled';
import {
    useHistory,
} from 'react-router-dom';
import grassOne from '@/assets/images/grassOne.png';
import { DownOutline } from 'antd-mobile-icons';
import Button from "@/common/Button";
import TopNav from "@/common/TopNav";
import Loading from "@/common/Loading";
import { getCountry, toLogin, getUserInfo } from '@/api';
import { store, counterSlice} from "@/store";
const Login = (props) => {
    const [method, setMethod] = useState('login');
    const [countries, setCountries] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    const history = useHistory();
    const ref = useRef();
    useEffect(async () => {
        // let token = localStorage.getItem('token');
        // if (token) history.push('/home');
        getCountry().then(res=>setCountries(res));
        return ()=>{
            // login.abort();
        }
    }, []);
    const onFinish = (values, key) => {
        let parameter;
        let currentCode;
        setIsLoading(true)
        switch (key) {
            case 'login':
                currentCode = values.phone.country_code;
                parameter = { ...values };
                delete parameter.country_code;
                delete parameter.isRead;
                parameter["phone"] = currentCode + values.phone.phone;
                toLogin({ ...parameter }).then(res=>{
                    let token=res.token;
                    if (token) {
                        localStorage.setItem('token', token);
                        getUserInfo().then(res=>{
                            store.dispatch(counterSlice.actions.getData(res));
                            setIsLoading(false)
                            history.push('/home');
                        })
                    }
                })
                
                break;

            default:
                parameter = { ...values };
                currentCode = values.phone.country_code;
                parameter["country_code"] = countries[currentCode];
                parameter["phone"] = currentCode + values.phone.phone;
                delete parameter.confirmPasswords;
                delete parameter.isRead;
                post('/client/register', { ...parameter }).catch(res => {
                    Toast.show({
                        content: res,
                        position: 'top',
                    })
                })
                break;
        }
        // 
    };
    const checkMobile = (_, value) => {
        if (value.phone) {
            return Promise.resolve();
        }
        return Promise.reject(new Error('Mobile number cannot be empty!'));
    };
    const checkRead = (_, value) => {

        if (value) {
            return Promise.resolve();
        }
        return Promise.reject(new Error('Consent clause required!'));
    };
    const checkPassword = (_, value) => {
        let frontPasswords = ref.current.getFieldValue('password')
        if (value == frontPasswords) {
            return Promise.resolve();
        }
        return Promise.reject(new Error('Passwords are inconsistent!'));
    };
    function changeMethod(value) {
        setMethod(value)
    }
    return (
        <LoginBox>
            {isLoading && <Loading/>}
            <div className='top'>
                <TopNav back={null} left={<span style={{ color: 'white' }}>LOGO</span>} right="English" />
            </div>
            <LoginInnerBoxFirst>
                <LoginContentBox>
                    <DesBox>
                        <DesBigItem>Protect our</DesBigItem>
                        <DesSmallItem>common home</DesSmallItem>
                    </DesBox>
                    <TabBox>
                        <TopType>
                            <Image
                                src={grassOne}
                                width={30}
                                height={30}
                                fit='cover'
                                className='grassesImg'
                            />
                            <span>{method === "login" ? "Login" : "Register"}</span>
                        </TopType>
                        {method === "login" ? <Form
                            layout='horizontal' onFinish={(e) => onFinish(e, 'login')} initialValues={{
                                phone: { country_code: '20', phone: '' },
                                password: '',
                                confirmPasswords: '',
                                verification: '',
                            }}
                            footer={
                                <Buttons>
                                    <Button onClick={() => changeMethod('register')} className="btn" content="Register" color="#333" size="16" radius="10" background="#E2E2E2" width={113} height={48} />
                                    <Button type='submit' className="btn" content="Login" color="#fff" size="16" radius="10" background="#00B578" width={113} height={48} />
                                </Buttons>
                            }
                        >
                            <FormItemBox>
                                <Lable><span>Telephone Number</span><span>Forget password</span></Lable>
                                <Form.Item name='phone' rules={[{ required: true }, { validator: checkMobile }]}>
                                    <MobileField columns={[Object.keys(countries)]} />
                                </Form.Item>
                            </FormItemBox>
                            <FormItemBox>
                                <Lable>Password</Lable>
                                <Form.Item name='password' rules={[{ required: true }]}>
                                    <Input type='password' placeholder='Enter your password' />
                                </Form.Item>
                            </FormItemBox>
                            <Form.Item className='read' name='isRead' rules={[{ validator: checkRead }]}>
                                <Checkbox
                                    value='small'
                                    style={{
                                        '--icon-size': '14px',
                                        '--font-size': '12px',
                                        '--gap': '6px',
                                    }}
                                >Agreement terms of the rules
                                </Checkbox>
                            </Form.Item>

                        </Form> : <Form
                            ref={ref}
                            layout='horizontal' onFinish={(e) => onFinish(e, 'register')}
                            footer={
                                <Buttons>
                                    <Button onClick={() => changeMethod('login')} className="btn" content="Login" color="#333" size="16" radius="10" background="#E2E2E2" width={113} height={48} />
                                    <Button type='submit' className="btn" content="Register" color="#fff" size="16" radius="10" background="#00B578" width={113} height={48} />
                                </Buttons>
                            }
                        >
                            <FormItemBox>
                                <Lable><span>Telephone Number</span><span>Forget password</span></Lable>
                                <Form.Item name='phone' rules={[{ required: true }, { validator: checkMobile }]}>
                                    <MobileField columns={[Object.keys(countries)]} />
                                </Form.Item>
                            </FormItemBox>
                            <FormItemBox>
                                <Lable>Password</Lable>
                                <Form.Item name='password' rules={[{ required: true }]}>
                                    <Input type="password" placeholder='Enter your password' />
                                </Form.Item>
                            </FormItemBox>
                            <FormItemBox>
                                <Lable>Confirm Password</Lable>
                                <Form.Item name='confirmPasswords' rules={[{ required: true }, { validator: checkPassword }]}>
                                    <Input type="password" placeholder='Enter your password again' />
                                </Form.Item>
                            </FormItemBox>
                            <FormItemBox>
                                <Lable><span>Verify Code</span> <span>Get Verification Code</span></Lable>
                                <Form.Item name='verify_code' rules={[{ required: true }]}>
                                    <Input placeholder='Enter your verify code' />
                                </Form.Item>
                            </FormItemBox>
                            <FormItemBox>
                                <Lable>Invite Code</Lable>
                                <Form.Item name='invite_code' >
                                    <Input placeholder='Enter your password again' />
                                </Form.Item>
                            </FormItemBox>
                            <Form.Item className='read' name='isRead' rules={[{ validator: checkRead }]}>
                                <Checkbox
                                    value='small'
                                    style={{
                                        '--icon-size': '14px',
                                        '--font-size': '12px',
                                        '--gap': '6px',
                                    }}
                                >Agreement terms of the rules
                                </Checkbox>
                            </Form.Item>

                        </Form>
                        }


                    </TabBox>
                </LoginContentBox>
            </LoginInnerBoxFirst>
        </LoginBox>
    )
}

const MobileField = ({ columns, value = { country_code: '20', phone: '' }, onChange }) => {
    const [visible, setVisible] = useState(false);
    const triggerValue = (changedValue) => {
        onChange === null || onChange === void 0 ? void 0 : onChange(Object.assign(Object.assign({}, value), changedValue));
    };
    const onRealValueChange = (value) => {
        triggerValue({ phone: value });
    };
    const onPreValueChange = (value) => {
        const v = value[0];
        if (v === null)
            return;
        triggerValue({ country_code: v });
    };
    return (<>
        <Space align='center'>
            <Space align='center' onClick={() => setVisible(true)}>
                <div>+{value.country_code}</div>
                <DownOutline />
            </Space>
            <Input placeholder='Enter your telephone number' value={value.phone} onChange={onRealValueChange} />
        </Space>
        <Picker columns={columns} visible={visible} onClose={() => {
            setVisible(false);
        }} value={[value.country_code]} onConfirm={onPreValueChange} />
    </>);
};
export default Login;