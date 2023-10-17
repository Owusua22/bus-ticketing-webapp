
import { LockOutlined, MailOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input, message } from "antd";
import { Link } from "react-router-dom";
import "./Login.css";
import { loginUser } from "../../api";
import {  Icon } from "semantic-ui-react";
import { useDispatch } from 'react-redux';
import { userLogin } from '../../Redux/userSlice'
const formItemLayout = {
  labelCol: {
    xs: {
      span: 20,
    },
    sm: {
      span: 20,
    },
  },
  wrapperCol: {
    xs: {
      span: 20,
    },
    sm: {
      span: 20,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 20,
      offset: 10,
    },
    sm: {
      span: 20,
      offset: 10,
    },
  },
};

const Login = () => {
  const dispatch = useDispatch();

  const onFinish = async (values) => {
    try {
      const response = await loginUser(values);
      if (response.success) {
        message.success(response.message);

        // Dispatch userLogin action with user data
        dispatch(userLogin(response.user));

        localStorage.setItem('token', response.data);
        window.location.href = '/home';
      } else {
        message.error(response.message);
      }
    } catch (error) {
      message.error(error.message);
    }
  };
  return (
    <div className="login-bg">
      <h1 style={{marginTop:"-90px", color:"#dd4b39"}}>BusTicketPro</h1>
      <div className="login">
        <h1 className="text" style={{marginLeft:"100px"}}>Sign in</h1>
        <div className="login-forms">
          <Form
            {...formItemLayout}
            name="normal_login"
            className="login-form"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
          >
              <Icon name="user" size="huge" color="orange" className="user-profile" style={{marginLeft:"100px"}} />
            <Form.Item
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please input your email Address!",
                },
              ]}
            >
              <Input
                prefix={<MailOutlined className="site-form-item-icon" />}
                placeholder="E-mail"
                className="login-input"
             style={{marginTop:"40px"}} />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your Password!",
                },
              ]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
                className="login-input"
              />
            </Form.Item>
            <Form.Item>
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

             
            </Form.Item>
         


            <Form.Item {...tailFormItemLayout} style={{}}>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
                style={{  width:"80px",padding:"5px"}}
              >
                Login
              </Button>
              <h5 onClick={() =>{ <Link to="/register"> Or register</Link>}} style={{cursor:"pointer", color:"blue"}}> Or register</h5>
            </Form.Item>
            <div className="social-icons">
  <Icon name="facebook square" size="big" color="blue" />
  <Icon name="twitter square" size="big" color="blue" />
  <Icon name="linkedin square" size="big" color="blue" />
  <Icon name="instagram" size="big" color="red"/>
</div>
          </Form>
        </div>
      </div>
    </div>
  );
};
export default Login;
