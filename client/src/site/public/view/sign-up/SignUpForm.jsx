import {Button, Form, Input} from "antd";
import SignUpIcon from "component/icon/SignUpIcon";
import Centered from "component/layout/Centered";
import {useTranslation} from "react-i18next";
import {useDispatch, useSelector} from "react-redux";
import UserRegisterRedux from "redux/user/register/redux";
import enableSubmit from "utils/form/enableSubmit";
import validationFor from "utils/form/validationFor";

const SignUpForm = () => {
	const {t} = useTranslation();
	const [form] = Form.useForm();
	const errors = useSelector(UserRegisterRedux.selector.getError);
	const dispatch = useDispatch();
	return (
		<Form
			labelCol={{span: 6}}
			form={form}
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
			<Centered>
				<Form.Item shouldUpdate={true}>
					{() => (
						<Button
							type="primary"
							htmlType="submit"
							icon={<SignUpIcon/>}
							onClick={() => dispatch(UserRegisterRedux.dismiss())}
							disabled={enableSubmit(form, ["name", "login", "password"])}
							children={t("public.sign-up.form.submit.label")}
						/>
					)}
				</Form.Item>
			</Centered>
		</Form>
	);
};

export default SignUpForm;
