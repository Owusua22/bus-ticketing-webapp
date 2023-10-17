import { Button, Form, Input, Select, message } from "antd";
import { useNavigate } from "react-router-dom";
import "./Register.css";
import { registerUser } from "../../api";
const { Option } = Select;

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

const Register = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();

  const onFinish = async (values) => {
    try {
      const response = await registerUser(values);
      if (response.success) {
        message.success(response.message);
        navigate("/login"); // Navigate immediately
      } else {
        message.error(response.message);
      }
    } catch (error) {
      message.error(error.message);
    }
  };

  return (
    <div className="login-bg">
      <h1 className="text-2xl">BusTicketPro</h1>

      <div className="reg-forms">
        <div>
          <h1 className="text">Sign Up</h1>
        </div>
        <div>
          <Form
            {...formItemLayout}
            form={form}
            name="register"
            onFinish={onFinish}
            scrollToFirstError
            className="reg-form"
          >
            <Form.Item
              name="firstName"
              label="First Name"
              rules={[
                {
                  type: "text",
                },
                {
                  required: true,
                  message: "Please input your First Name",
                },
              ]}
              className="reg-input"
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="lastName"
              label="Last Name"
              rules={[
                {
                  type: "text",
                },
                {
                  required: true,
                  message: "Please type your last Name",
                },
              ]}
              className="reg-input"
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="email"
              label="E-mail"
              rules={[
                {
                  type: "email",
                  message: "The input is not valid E-mail!",
                },
                {
                  required: true,
                  message: "Please input your E-mail!",
                },
              ]}
              className="reg-input"
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="password"
              label="Password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
              hasFeedback
              className="reg-input"
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              name="confirm"
              label="Confirm Password"
              dependencies={["password"]}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: "Please confirm your password!",
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      new Error("The password you have entered do not match!")
                    );
                  },
                }),
              ]}
              className="reg-input"
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              name="contact"
              label="Contact"
              rules={[
                {
                  required: true,
                  message: "Please enter your contact",
                },
              ]}
              className="reg-input"
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="gender"
              label="Gender"
              rules={[
                {
                  required: true,
                  message: "Please select gender!",
                },
              ]}
              className="reg-input"
            >
              <Select placeholder="select your gender">
                <Option value="male">Male</Option>
                <Option value="female">Female</Option>
                <Option value="other">Other</Option>
              </Select>
            </Form.Item>
            <Form.Item {...tailFormItemLayout}>
              <Button type="primary" htmlType="submit">
                Register
              </Button>
            </Form.Item>
            <h1
              className="text-sm underline already"
              onClick={() => navigate("/login")}
            >
              Already a member? Login
            </h1>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Register;
