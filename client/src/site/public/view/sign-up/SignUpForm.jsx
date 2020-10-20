import {CheckCircleOutlined} from "@ant-design/icons";
import {Button, Form, Input} from "antd";
import React from "react";
import {withTranslation} from "react-i18next";
import {connect} from "react-redux";
import {onUserRegister} from "redux/user/register/action";
import {getUserRegisterRequest} from "redux/user/register/selector";

const layout = {
	labelCol: {span: 8},
	wrapperCol: {span: 16},
};

const tailLayout = {
	wrapperCol: {offset: 10, span: layout.wrapperCol.span},
};

const SignUpForm = (
	{
		t,
		initials,
		onFinish,
	}) =>
	<Form
		{...layout}
		initialValues={initials}
		onFinish={onFinish}
		name={"sign-up"}
	>
		<Form.Item
			name="name"
			labelAlign={"left"}
			label={t("public.sign-up.form.name.label")}
			rules={[{required: true, message: t("public.sign-up.form.name.required")}]}
			children={<Input placeholder={t("public.sign-up.form.name.label")}/>}
		/>
		<Form.Item
			name="login"
			labelAlign={"left"}
			label={t("public.sign-up.form.login.label")}
			rules={[{required: true, message: t("public.sign-up.form.login.required")}]}
			children={<Input placeholder={t("public.sign-up.form.login.label")}/>}
		/>

		<Form.Item
			name="password"
			labelAlign={"left"}
			label={t("public.sign-up.form.password.label")}
			rules={[{required: true, message: t("public.sign-up.form.password.required")}]}
			children={<Input.Password placeholder={t("public.sign-up.form.password.label")}/>}
		/>

		<Form.Item {...tailLayout}>
			<Button type="primary" htmlType="submit" icon={<CheckCircleOutlined/>}>{t("public.sign-up.form.submit.label")}</Button>
		</Form.Item>
	</Form>
;

export default connect(
	state => ({
		initials: getUserRegisterRequest(state),
	}),
	dispatch => ({
		onFinish: values => {
			dispatch(onUserRegister(values));
		}
	}),
)(withTranslation()(SignUpForm));
