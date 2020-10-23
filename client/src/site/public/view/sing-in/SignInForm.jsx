import {LockOutlined, UserOutlined} from "@ant-design/icons";
import {Button, Col, Form, Input, Row} from "antd";
import SignInIcon from "component/icon/SignInIcon";

import {withTranslation} from "react-i18next";
import {connect} from "react-redux";
import {onSessionOpen} from "redux/session/action";
import {onUserLogin, onUserLoginDismiss} from "redux/user/login/action";
import {getUserLoginError, getUserLoginUser} from "redux/user/login/selector";
import validationFor from "utils/form/validationFor";

const SignInForm = (
	{
		t,
		onFinish,
		onDismiss,
		payload,
	}) =>
	<Form
		wrapperCol={{span: 24}}
		onFinish={onFinish}
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
					<Button type="primary" htmlType="submit" icon={<SignInIcon/>} onClick={() => onDismiss()}>
						{t("public.sign-in.form.submit.label")}
					</Button>
				</Form.Item>
			</Col>
		</Row>
	</Form>
;
export default connect(
	state => ({
		payload: getUserLoginError(state),
	}),
	{
		onDismiss: () => dispatch => dispatch(onUserLoginDismiss()),
		onFinish: values => (dispatch, getState) => {
			dispatch(onUserLogin(values)).then(() => {
				dispatch(onSessionOpen(getUserLoginUser(getState())));
			});
		}
	},
)(withTranslation()(SignInForm));
