import {LockOutlined, UserOutlined} from "@ant-design/icons";
import {Button, Col, Form, Input, Row} from "antd";
import React from "react";
import {withTranslation} from "react-i18next";
import {connect} from "react-redux";
import {onUserLogin} from "redux/user/login/action";
import {isUserLoginLoading} from "redux/user/login/selector";

const SignInForm = (
	{
		t,
		isLoading,
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
					rules={[{required: true, message: t("public.sign-in.form.login.required")}]}
					children={<Input prefix={<UserOutlined className="site-form-item-icon"/>} placeholder={t("public.sign-in.form.login.label")}/>}
				/>
			</Col>
		</Row>
		<Row justify={"center"}>
			<Col span={24}>
				<Form.Item
					name="password"
					rules={[{required: true, message: t("public.sign-in.form.password.required")}]}
					children={<Input.Password prefix={<LockOutlined className="site-form-item-icon"/>} placeholder={t("public.sign-in.form.password.label")}/>}
				/>
			</Col>
		</Row>
		<Row justify={"center"}>
			<Col>
				<Form.Item>
					<Button type="primary" htmlType="submit" disabled={isLoading}>
						{t("public.sign-in.form.submit.label")}
					</Button>
				</Form.Item>
			</Col>
		</Row>
	</Form>
;
export default connect(
	state => ({
		isLoading: isUserLoginLoading(state),
		initials: {},
	}),
	dispatch => ({
		onFinish: values => {
			dispatch(onUserLogin(values));
		}
	}),
)(withTranslation()(SignInForm));
