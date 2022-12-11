import React from 'react';
import {Button, Form, Input, Typography} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {clearError, loginQuery} from "store/signIn/signIn.slice";
import {loginUserSelector} from "store/signIn/signIn.selector";
import "./SignIn.css";

const { Text, Title } = Typography;

const SignIn = () => {
    const dispatch = useDispatch();
    const {usersError} = useSelector(loginUserSelector);

    const onFinish = (values) => {
        dispatch(loginQuery(values))
    };

    const deleteError = () => {
        dispatch(clearError());
    }

    return (
        <>
            <div className="sign-in-form">
                <Typography>
                    <Title>
                        Sign in
                    </Title>
                </Typography>
                <Form
                    name="basic"
                    labelCol={{
                        span: 6,
                    }}
                    wrapperCol={{
                        span: 13,
                    }}
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Login"
                        name="login"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your login!',
                            },
                        ]}
                    >
                        <Input onChange={deleteError}/>
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                    >
                        <Input.Password onChange={deleteError}/>
                    </Form.Item>

                    {
                        usersError &&
                        <Typography>
                            <Text className="error">
                                {usersError}
                            </Text>
                        </Typography>
                    }

                    <Form.Item
                        wrapperCol={{
                            span: 14,
                        }}
                    >
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </>
    );
}
export default SignIn;