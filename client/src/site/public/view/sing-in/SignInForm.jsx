import {LockOutlined, UserOutlined} from "@ant-design/icons";
import {Button, Form, Input} from "antd";
import SignInIcon from "component/icon/SignInIcon";
import Centered from "component/layout/Centered";
import {useTranslation} from "react-i18next";
import {useDispatch, useSelector, useStore} from "react-redux";
import SessionRedux from "redux/session/redux";
import UserLoginRedux from "redux/user/login/redux";
import enableSubmit from "utils/form/enableSubmit";
import validationFor from "utils/form/validationFor";

const SignInForm = () => {
	const {t} = useTranslation();
	const errors = useSelector(UserLoginRedux.selector.getError);
	const dispatch = useDispatch();
	const store = useStore();
	const [form] = Form.useForm();
	return (
		<Form
			form={form}
			onFinish={values => dispatch(UserLoginRedux.login(values)).then(() => {
				dispatch(SessionRedux.open(UserLoginRedux.selector.getPayload(store.getState())));
			}, () => null)}
			name={"sign-in"}
		>
			<Form.Item
				name="login"
				{...validationFor("login", errors, t)}
				labelCol={6}
				rules={[
					{
						required: true,
						message: t("public.sign-in.form.login.required")
					}
				]}
				children={<Input prefix={<UserOutlined className="site-form-item-icon"/>} placeholder={t("public.sign-in.form.login.label")}/>}
			/>
			<Form.Item
				name="password"
				{...validationFor("password", errors, t)}
				rules={[
					{
						required: true,
						message: t("public.sign-in.form.password.required")
					}
				]}
				children={<Input.Password prefix={<LockOutlined className="site-form-item-icon"/>} placeholder={t("public.sign-in.form.password.label")}/>}
			/>
			<Centered>
				<Form.Item shouldUpdate={true}>
					{() => (
						<Button
							type="primary"
							htmlType="submit"
							icon={<SignInIcon/>}
							onClick={() => dispatch(UserLoginRedux.dismiss())}
							disabled={enableSubmit(form, ["login", "password"])}
							children={t("public.sign-in.form.submit.label")}
						/>
					)}
				</Form.Item>
			</Centered>
		</Form>
	);
};

export default SignInForm;
