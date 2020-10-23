import {Button, Form, Input} from "antd";
import SignUpIcon from "component/icon/SignUpIcon";
import {withTranslation} from "react-i18next";
import {connect} from "react-redux";
import {onUserRegister, onUserRegisterDismiss} from "redux/user/register/action";
import {getUserRegisterError} from "redux/user/register/selector";
import validationFor from "utils/form/validationFor";

const layout = {
	labelCol: {span: 8},
	wrapperCol: {span: 16},
};

const tailLayout = {
	wrapperCol: {
		offset: 10,
		span: layout.wrapperCol.span
	},
};

const SignUpForm = (
	{
		t,
		onFinish,
		onDismiss,
		payload,
	}) =>
	<Form
		{...layout}
		onFinish={onFinish}
		name={"sign-up"}
	>
		<Form.Item
			name="name"
			{...validationFor("name", payload, t)}
			labelAlign={"left"}
			label={t("public.sign-up.form.name.label")}
			rules={[
				{
					required: true,
					message: t("public.sign-up.form.name.required")
				}
			]}
			children={<Input placeholder={t("public.sign-up.form.name.label")}/>}
		/>
		<Form.Item
			name="login"
			{...validationFor("login", payload, t)}
			labelAlign={"left"}
			label={t("public.sign-up.form.login.label")}
			rules={[
				{
					required: true,
					message: t("public.sign-up.form.login.required")
				}
			]}
			children={<Input placeholder={t("public.sign-up.form.login.label")}/>}
		/>

		<Form.Item
			name="password"
			{...validationFor("password", payload, t)}
			labelAlign={"left"}
			label={t("public.sign-up.form.password.label")}
			rules={[
				{
					required: true,
					message: t("public.sign-up.form.password.required")
				}
			]}
			children={<Input.Password placeholder={t("public.sign-up.form.password.label")}/>}
		/>

		<Form.Item {...tailLayout}>
			<Button type="primary" htmlType="submit" icon={<SignUpIcon/>} onClick={() => onDismiss()}>{t("public.sign-up.form.submit.label")}</Button>
		</Form.Item>
	</Form>
;

export default connect(
	state => ({
		payload: getUserRegisterError(state),
	}),
	dispatch => ({
		onDismiss: () => dispatch(onUserRegisterDismiss()),
		onFinish: values => {
			dispatch(onUserRegister(values));
		}
	}),
)(withTranslation()(SignUpForm));
