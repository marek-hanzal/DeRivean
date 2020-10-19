import {Card, Col, Row} from "antd";
import React from "react";
import {withTranslation} from "react-i18next";
import {connect} from "react-redux";
import {getUserRegisterStatus} from "redux/user/register/selector";
import PublicView from "site/public/component/PublicView";
import PublicPath from "site/public/router/PublicPath";
import FailedResult from "site/public/view/sign-up/FailedResult";
import SignUpForm from "site/public/view/sign-up/SignUpForm";
import SucceedResult from "site/public/view/sign-up/SucceedResult";

function resolveStatus(t, status) {
	switch (status) {
		case "SUCCESS":
			return <SucceedResult/>;
		case "FAILURE":
			return <FailedResult/>;
		default:
			return (
				<Row justify={"center"}>
					<Col span={8}>
						<Card title={t("public.sign-up.title")} hoverable={true}>
							<SignUpForm/>
						</Card>
					</Col>
				</Row>
			);
	}
}

const SignUpView = (
	{
		t,
		status,
	}) =>
	<PublicView
		title={"public.sign-up.title"}
		subtitle={"public.sign-up.subtitle"}
		open={[PublicPath.root]}
		selected={[PublicPath.signUp]}
		children={resolveStatus(t, status)}
	/>
;

export default connect(
	state => ({
		status: getUserRegisterStatus(state),
	}),
	{},
)(withTranslation()(SignUpView));
