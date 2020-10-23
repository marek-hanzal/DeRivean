import {LockOutlined, UserOutlined} from "@ant-design/icons";
import {Button, Col, Form, Input, Row} from "antd";
import SignInIcon from "component/icon/SignInIcon";

import {withTranslation} from "react-i18next";
import {connect} from "react-redux";
import {onSessionOpen} from "redux/session/action";
import {onUserLogin, onUserLoginDismiss} from "redux/user/login/action";
import {getUserLoginUser} from "redux/user/login/selector";

const SignInForm = (
	{
		t,
		initials,
		onFinish,
	}) =>
	<Form
		wrapperCol={{span: 24}}
		initialValues={initials}
		onFinish={onFinish}
		name={"sign-in"}
	>
		<Row justify={"center"}>
			<Col span={24}>
				<Form.Item
					name="login"
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
					<Button type="primary" htmlType="submit" icon={<SignInIcon/>}>
						{t("public.sign-in.form.submit.label")}
					</Button>
				</Form.Item>
			</Col>
		</Row>
	</Form>
;
export default connect(
	state => ({
		initials: {},
	}),
	{
		onFinish: values => (dispatch, getState) => {
			dispatch(onUserLogin(values)).then(() => {
				dispatch(onSessionOpen(getUserLoginUser(getState())));
				dispatch(onUserLoginDismiss());
			});
		}
	},
)(withTranslation()(SignInForm));
