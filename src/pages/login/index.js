import React,{useState,useRef} from 'react';
import { NavBar, Image, Tabs, Form, Input, Space, Picker, Checkbox } from 'antd-mobile';
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
const Login=(props)=>{
    const [method,setMethod]=useState('login');
    const history = useHistory();
    const ref = useRef();
    const onFinish = (values) => {
        
        history.push('/home')
    };
    const checkMobile = (_, value) => {
        if (value.realValue) {
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
        let frontPasswords=ref.current.getFieldValue('passwords')
        if (value==frontPasswords) {
            return Promise.resolve();
        }
        return Promise.reject(new Error('Passwords are inconsistent!'));
    };
    function changeMethod(value){
        setMethod(value)
    }
    return (
        <LoginBox>
            <div className='top'>
                <NavBar back={null} left={<span style={{ color: 'white' }}>LOGO</span>} right={<span style={{ color: 'white' }}>English</span>}></NavBar>
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
                            <span>{method==="login" ? "Login" : "Register"}</span>
                        </TopType>
                        {method === "login" ? <Tabs style={{'--active-title-color':'#333','--active-line-height':'0'}}>
                            <Tabs.Tab title='Password' key='password'>
                            <Form
                                layout='horizontal' onFinish={onFinish} initialValues={{
                                    phone: { preValue: '86', realValue: '22222' },
                                    passwords: '123pppppp456',
                                    confirmPasswords: 'w',
                                    verification: 'w213',
                                }}
                                footer={
                                    <Buttons>
                                        <Button onClick={()=>changeMethod('register')} className="btn" content="Register" color="#333" size="16" radius="10" background="#E2E2E2" width={113} height={48} />
                                        <Button type='submit' className="btn" content="Login" color="#fff" size="16" radius="10" background="#00B578" width={113} height={48} />
                                    </Buttons>
                                }
                            >
                                <FormItemBox>
                                <Lable><span>Telephone Number</span><span>Forget password</span></Lable>
                                    <Form.Item name='phone' rules={[{ required: true }, { validator: checkMobile }]}>
                                        <MobileField/>
                                    </Form.Item>
                                </FormItemBox>
                                <FormItemBox>
                                    <Lable>Password</Lable>
                                    <Form.Item name='passwords' rules={[{ required: true }]}>
                                        <Input type='password' placeholder='Enter your password'/>
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
                            
                            </Tabs.Tab>
                            <Tabs.Tab title='Verification' key='verification'>
                            <Form
                                layout='horizontal' onFinish={onFinish} initialValues={{
                                    phone: { preValue: '86', realValue: '1111' },
                                    verification: 'w213',
                                }}
                                footer={
                                    <Buttons>
                                        <Button onClick={()=>changeMethod('register')} className="btn" content="Register" color="#333" size="16" radius="10" background="#E2E2E2" width={113} height={48} />
                                        <Button type='submit' className="btn" content="Login" color="#fff" size="16" radius="10" background="#00B578" width={113} height={48} />
                                    </Buttons>
                                }
                            >
                                <FormItemBox>
                                <Lable>Telephone Number</Lable>
                                    <Form.Item name='phone' rules={[{ required: true }, { validator: checkMobile }]}>
                                        <MobileField/>
                                    </Form.Item>
                                </FormItemBox>
                                <FormItemBox>
                                    <Lable><span>Verification Code</span> <span>Get Verification Code</span></Lable>
                                    <Form.Item name='verification' rules={[{ required: true }]}>
                                        <Input placeholder='Enter your verification code'/>
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
                            </Tabs.Tab>
                        </Tabs> : <Tabs style={{'--active-title-color':'#333','--active-line-height':'0'}}>
                            <Tabs.Tab title='Password' key='password'>
                            <Form
                                ref={ref}
                                layout='horizontal' onFinish={onFinish}
                                footer={
                                    <Buttons>
                                        <Button onClick={()=>changeMethod('login')} className="btn" content="Login" color="#333" size="16" radius="10" background="#E2E2E2" width={113} height={48} />
                                        <Button  type='submit'  className="btn" content="Register" color="#fff" size="16" radius="10" background="#00B578" width={113} height={48} />
                                    </Buttons>
                                }
                            >
                                <FormItemBox>
                                <Lable><span>Telephone Number</span><span>Forget password</span></Lable>
                                    <Form.Item name='phone' rules={[{ required: true }, { validator: checkMobile }]}>
                                        <MobileField/>
                                    </Form.Item>
                                </FormItemBox>
                                <FormItemBox>
                                    <Lable>Password</Lable>
                                    <Form.Item name='passwords' rules={[{ required: true }]}>
                                        <Input type="password" placeholder='Enter your password'/>
                                    </Form.Item>
                                </FormItemBox>
                                <FormItemBox>
                                    <Lable>Confirm Password</Lable>
                                    <Form.Item name='confirmPasswords' rules={[{ required: true }, { validator: checkPassword }]}>
                                        <Input type="password" placeholder='Enter your password again'/>
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
                            
                            </Tabs.Tab>
                            <Tabs.Tab title='Verification' key='verification'>
                            <Form
                                layout='horizontal' onFinish={onFinish} initialValues={{
                                    phone: { preValue: '86', realValue: '' },
                                }}
                                footer={
                                    <Buttons>
                                        <Button onClick={()=>changeMethod('login')} className="btn" content="Login" color="#333" size="16" radius="10" background="#E2E2E2" width={113} height={48} />
                                        <Button  type='submit'  className="btn" content="Register" color="#fff" size="16" radius="10" background="#00B578" width={113} height={48} />
                                    </Buttons>
                                }
                            >
                                <FormItemBox>
                                <Lable>Telephone Number</Lable>
                                    <Form.Item name='phone' rules={[{ required: true }, { validator: checkMobile }]}>
                                        <MobileField/>
                                    </Form.Item>
                                </FormItemBox>
                                <FormItemBox>
                                    <Lable><span>Verification Code</span> <span>Get Verification Code</span></Lable>
                                    <Form.Item name='verification' rules={[{ required: true }]}>
                                        <Input placeholder='Enter your verification code'/>
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
                            </Tabs.Tab>
                        </Tabs>
                        }
                        
                        
                    </TabBox>
                </LoginContentBox>
            </LoginInnerBoxFirst>
        </LoginBox>
    )
}

const MobileField = ({ value = { preValue: '86', realValue: '' }, onChange}) => {
    const columns = [['86', '01', '02', '03']];
    const [visible, setVisible] = useState(false);
    const triggerValue = (changedValue) => {
        onChange === null || onChange === void 0 ? void 0 : onChange(Object.assign(Object.assign({}, value), changedValue));
    };
    const onRealValueChange = (value) => {
        triggerValue({ realValue: value });
    };
    const onPreValueChange = (value) => {
        const v = value[0];
        if (v === null)
            return;
        triggerValue({ preValue: v });
    };
    return (<>
      <Space align='center'>
        <Space align='center' onClick={() => setVisible(true)}>
          <div>+{value.preValue}</div>
          <DownOutline />
        </Space>
        <Input placeholder='Enter your telephone number' value={value.realValue} onChange={onRealValueChange}/>
      </Space>
      <Picker columns={columns} visible={visible} onClose={() => {
            setVisible(false);
        }} value={[value.preValue]} onConfirm={onPreValueChange}/>
    </>);
};
export default Login;