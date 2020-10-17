import {LockOutlined, UserOutlined} from "@ant-design/icons";
import Button from "antd/lib/button";
import Form from "antd/lib/form";
import Input from "antd/lib/input";
import React from "react";
import PublicView from "site/public/component/PublicView";
import PublicPath from "site/public/router/PublicPath";

const LoginView = () =>
	<PublicView
		title={"public.login.title"}
		subtitle={"public.login.subtitle"}
		open={[PublicPath.root]}
		selected={[PublicPath.login]}
	>
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
	</PublicView>
;

export default LoginView;
