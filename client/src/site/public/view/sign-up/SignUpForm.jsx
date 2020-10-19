import {Button, Form, Input, Spin} from "antd";
import React from "react";
import {withTranslation} from "react-i18next";
import {connect} from "react-redux";
import {onUserRegister} from "redux/user/register/action";
import {getUserRegisterRequest, isUserRegisterLoading} from "redux/user/register/selector";

const layout = {
	labelCol: {span: 6},
	wrapperCol: {span: 16},
};

const tailLayout = {
	wrapperCol: {offset: layout.labelCol.span + 4, span: layout.wrapperCol.span},
};

const SignUpForm = (
	{
		t,
		isLoading,
		initials,
		onFinish,
		onFailure,
	}) =>
	<Spin spinning={isLoading} delay={200}>
		<Form
			{...layout}
			initialValues={initials}
			name="registration"
			onFinish={onFinish}
			onFinishFailed={onFailure}
		>
			<Form.Item
				label={t("public.sign-up.form.name.label")}
				name="name"
				rules={[{required: true, message: t("public.sign-up.form.name.required")}]}
				children={<Input/>}
			/>
			<Form.Item
				label={t("public.sign-up.form.login.label")}
				name="login"
				rules={[{required: true, message: t("public.sign-up.form.login.required")}]}
				children={<Input/>}
			/>

			<Form.Item
				label={t("public.sign-up.form.password.label")}
				name="password"
				rules={[{required: true, message: t("public.sign-up.form.password.required")}]}
				children={<Input.Password/>}
			/>

			<Form.Item {...tailLayout}>
				<Button type="primary" htmlType="submit" disabled={isLoading}>{t("public.sign-up.form.submit.label")}</Button>
			</Form.Item>
		</Form>
	</Spin>
;

export default connect(
	state => ({
		isLoading: isUserRegisterLoading(state),
		initials: getUserRegisterRequest(state),
	}),
	dispatch => ({
		onFinish: values => {
			dispatch(onUserRegister(values));
		}
	}),
)(withTranslation()(SignUpForm));
