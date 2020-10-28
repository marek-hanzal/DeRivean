import {Button, Form, Input} from "antd";
import SignUpIcon from "component/icon/SignUpIcon";
import {useTranslation} from "react-i18next";
import {useDispatch, useSelector} from "react-redux";
import UserRegisterRedux from "redux/user/register/redux";
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

const SignUpForm = () => {
	const {t} = useTranslation();
	const errors = useSelector(UserRegisterRedux.selector.getError);
	const dispatch = useDispatch();
	return (
		<Form
			{...layout}
			onFinish={values => {
				dispatch(UserRegisterRedux.register(values));
			}}
			name={"sign-up"}
		>
			<Form.Item
				name="name"
				{...validationFor("name", errors, t)}
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
				{...validationFor("login", errors, t)}
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
				{...validationFor("password", errors, t)}
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
				<Button type="primary" htmlType="submit" icon={<SignUpIcon/>} onClick={() => dispatch(UserRegisterRedux.dismiss())}>{t("public.sign-up.form.submit.label")}</Button>
			</Form.Item>
		</Form>
	);
};

export default SignUpForm;
