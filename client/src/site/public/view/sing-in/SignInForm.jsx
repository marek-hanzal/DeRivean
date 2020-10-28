import {LockOutlined, UserOutlined} from "@ant-design/icons";
import {Button, Col, Form, Input, Row} from "antd";
import SignInIcon from "component/icon/SignInIcon";
import {useTranslation} from "react-i18next";
import {useDispatch, useSelector, useStore} from "react-redux";
import SessionRedux from "redux/session/redux";
import UserLoginRedux from "redux/user/login/redux";
import validationFor from "utils/form/validationFor";

const SignInForm = () => {
	const {t} = useTranslation();
	const errors = useSelector(UserLoginRedux.selector.getError);
	const dispatch = useDispatch();
	const store = useStore();
	return (
		<Form
			wrapperCol={{span: 24}}
			onFinish={values => dispatch(UserLoginRedux.login(values)).then(() => {
				dispatch(SessionRedux.open(UserLoginRedux.selector.getPayload(store.getState())));
			}, () => null)}
			name={"sign-in"}
		>
			<Row justify={"center"}>
				<Col span={24}>
					<Form.Item
						name="login"
						{...validationFor("login", errors, t)}
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
						{...validationFor("password", errors, t)}
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
					<Button type="primary" htmlType="submit" icon={<SignInIcon/>} onClick={() => dispatch(UserLoginRedux.dismiss())}>
						{t("public.sign-in.form.submit.label")}
					</Button>
				</Col>
			</Row>
		</Form>
	);
};

export default SignInForm;
