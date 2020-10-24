import {LockOutlined, UserOutlined} from "@ant-design/icons";
import {Button, Col, Form, Input, Row} from "antd";
import SignInIcon from "component/icon/SignInIcon";
import {useTranslation} from "react-i18next";
import {useDispatch, useSelector, useStore} from "react-redux";
import {onSessionOpen} from "redux/session/action";
import {onUserLogin, onUserLoginDismiss} from "redux/user/login/action";
import {getUserLoginError, getUserLoginUser} from "redux/user/login/selector";
import validationFor from "utils/form/validationFor";

const SignInForm = () => {
	const {t} = useTranslation();
	const payload = useSelector(getUserLoginError);
	const dispatch = useDispatch();
	const store = useStore();
	return (
		<Form
			wrapperCol={{span: 24}}
			onFinish={values => dispatch(onUserLogin(values)).then(() => {
				dispatch(onSessionOpen(getUserLoginUser(store.getState())));
			}, () => null)}
			name={"sign-in"}
		>
			<Row justify={"center"}>
				<Col span={24}>
					<Form.Item
						name="login"
						{...validationFor("login", payload, t)}
						rules={[
							{
								required: true,
								message: t("public.sign-in.form.login.required")
							}
						]}
						children={<Input prefix={<UserOutlined className="site-form-item-icon"/>} placeholder={t("public.sign-in.form.login.label")}/>}
					/>
				</Col>
			</Row>
			<Row justify={"center"}>
				<Col span={24}>
					<Form.Item
						name="password"
						{...validationFor("password", payload, t)}
						rules={[
							{
								required: true,
								message: t("public.sign-in.form.password.required")
							}
						]}
						children={<Input.Password prefix={<LockOutlined className="site-form-item-icon"/>} placeholder={t("public.sign-in.form.password.label")}/>}
					/>
				</Col>
			</Row>
			<Row justify={"center"}>
				<Col>
					<Form.Item>
						<Button type="primary" htmlType="submit" icon={<SignInIcon/>} onClick={() => dispatch(onUserLoginDismiss())}>
							{t("public.sign-in.form.submit.label")}
						</Button>
					</Form.Item>
				</Col>
			</Row>
		</Form>
	);
};

export default SignInForm;
