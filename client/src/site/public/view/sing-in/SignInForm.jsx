import {LockOutlined, UserOutlined} from "@ant-design/icons";
import {Button, Col, Form, Input, Row} from "antd";
import React from "react";
import {connect} from "react-redux";

const SignInForm = (
	{
		isLoading,
	}) =>
	<Form
		wrapperCol={{span: 24}}
	>
		<Row justify={"center"}>
			<Col>
				<Form.Item
					name="username"
					rules={[{required: true, message: "Please input your username!"}]}
					children={<Input prefix={<UserOutlined className="site-form-item-icon"/>} placeholder="Username"/>}
				/>
			</Col>
			<Col>
				<Form.Item
					name="password"
					rules={[{required: true, message: "Please input your password!"}]}
					children={<Input prefix={<LockOutlined className="site-form-item-icon"/>} type="password" placeholder="Password"/>}
				/>
			</Col>
			<Col>
				<Form.Item>
					<Button
						type="primary"
						htmlType="submit"
						disabled={isLoading}
					>
						Log in
					</Button>
				</Form.Item>
			</Col>
		</Row>
	</Form>
;
export default connect(
	state => ({
		isLoading: false,
	}),
	dispatch => ({}),
)(SignInForm);
