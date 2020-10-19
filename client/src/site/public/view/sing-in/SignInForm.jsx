import {LockOutlined, UserOutlined} from "@ant-design/icons";
import {Button, Form, Input} from "antd";
import React from "react";

const SignInForm = () =>
	<Form layout="inline">
		<Form.Item
			name="username"
			rules={[{required: true, message: "Please input your username!"}]}
		>
			<Input prefix={<UserOutlined className="site-form-item-icon"/>} placeholder="Username"/>
		</Form.Item>
		<Form.Item
			name="password"
			rules={[{required: true, message: "Please input your password!"}]}
		>
			<Input
				prefix={<LockOutlined className="site-form-item-icon"/>}
				type="password"
				placeholder="Password"
			/>
		</Form.Item>
		<Form.Item shouldUpdate={true}>
			{() => (
				<Button
					type="primary"
					htmlType="submit"
					disabled={
						false
						// !form.isFieldsTouched(true) ||
						// form.getFieldsError().filter(({errors}) => errors.length).length
					}
				>
					Log in
				</Button>
			)}
		</Form.Item>
	</Form>
;
export default SignInForm;
