import {Col, Row} from "antd";
import React from "react";
import {connect} from "react-redux";
import {getUserRegisterStatus} from "redux/user/register/selector";
import PublicView from "site/public/component/PublicView";
import PublicPath from "site/public/router/PublicPath";
import FailedResult from "site/public/view/sign-up/FailedResult";
import SignUpForm from "site/public/view/sign-up/SignUpForm";
import SucceedResult from "site/public/view/sign-up/SucceedResult";

function resolveStatus(status) {
	switch (status) {
		case "SUCCESS":
			return <SucceedResult/>;
		case "FAILURE":
			return <FailedResult/>;
		default:
			return (
				<Row justify={"center"}>
					<Col span={8}>
						<SignUpForm/>
					</Col>
				</Row>
			);
	}
}

const SignUpView = (
	{
		status,
	}) =>
	<PublicView
		title={"public.sign-up.title"}
		subtitle={"public.sign-up.subtitle"}
		open={[PublicPath.root]}
		selected={[PublicPath.signUp]}
		children={resolveStatus(status)}
	/>
;

export default connect(
	state => ({
		status: getUserRegisterStatus(state),
	}),
	{},
)(SignUpView);
