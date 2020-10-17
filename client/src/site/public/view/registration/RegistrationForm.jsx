import {Button, Form, Input} from "antd";
import React from "react";
import {withTranslation} from "react-i18next";
import {connect} from "react-redux";
import {onUserRegister} from "redux/user/register/action";

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
		name="registration"
		onFinish={onFinish}
		onFinishFailed={onFailure}
	>
		<Form.Item
			label={t("public.registration.form.name.label")}
			name="name"
			rules={[{required: true, message: t("public.registration.form.name.required")}]}
			children={<Input/>}
		/>
		<Form.Item
			label={t("public.registration.form.user.label")}
			name="user"
			rules={[{required: true, message: t("public.registration.form.user.required")}]}
			children={<Input/>}
		/>

		<Form.Item
			label={t("public.registration.form.password.label")}
			name="password"
			rules={[{required: true, message: t("public.registration.form.password.required")}]}
			children={<Input.Password/>}
		/>

		<Form.Item {...tailLayout}>
			<Button type="primary" htmlType="submit">{t("public.registration.form.submit.label")}</Button>
		</Form.Item>
	</Form>
;

export default connect(
	state => ({}),
	dispatch => ({
		onFinish: values => {
			dispatch(onUserRegister(values));
		}
	}),
)(withTranslation()(RegistrationForm));
