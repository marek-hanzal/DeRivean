import {Button, Form, Input} from "antd";
import React from "react";
import {withTranslation} from "react-i18next";

const layout = {
	labelCol: {span: 8},
	wrapperCol: {span: 16},
};

const tailLayout = {
	wrapperCol: {offset: 8, span: 16},
};

const RegistrationForm = (
	{
		t,
		onFinish,
		onFailure,
	}) =>
	<Form
		{...layout}
		name="basic"
		initialValues={{remember: true}}
		onFinish={onFinish}
		onFinishFailed={onFailure}
	>
		<Form.Item
			label="[Name]"
			name="name"
			rules={[{required: true, message: "[Please input your username!]"}]}
			children={<Input/>}
		/>
		<Form.Item
			label="[Username]"
			name="user"
			rules={[{required: true, message: "[Please input your username!]"}]}
			children={<Input/>}
		/>

		<Form.Item
			label="[Password]"
			name="password"
			rules={[{required: true, message: "[Please input your password!]"}]}
			children={<Input.Password/>}
		/>

		<Form.Item {...tailLayout}>
			<Button type="primary" htmlType="submit">[Sign-up]</Button>
		</Form.Item>
	</Form>
;

export default withTranslation()(RegistrationForm);
