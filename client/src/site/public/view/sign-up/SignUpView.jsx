import {FormOutlined, RightCircleOutlined} from "@ant-design/icons";
import {Card, Col, Result, Row, Typography} from "antd";
import React from "react";
import {withTranslation} from "react-i18next";
import {connect} from "react-redux";
import {getUserRegisterStatus} from "redux/user/register/selector";
import MinimalView from "site/public/component/MinimalView";
import PublicView from "site/public/component/PublicView";
import PublicPath from "site/public/router/PublicPath";
import FailedResult from "site/public/view/sign-up/FailedResult";
import SignUpForm from "site/public/view/sign-up/SignUpForm";
import SucceedResult from "site/public/view/sign-up/SucceedResult";

function resolveStatus(t, status) {
	switch (status) {
		case "SUCCESS":
			return (
				<MinimalView>
					<SucceedResult/>
				</MinimalView>
			);
		case "FAILURE":
			return (
				<MinimalView>
					<FailedResult/>
				</MinimalView>
			);
		default:
			return (
				<PublicView
					open={[PublicPath.root]}
					selected={[PublicPath.signUp]}
				>
					<Card title={t("public.sign-up.title")}>
						<Result
							icon={<FormOutlined/>}
							status={"success"}
							title={t("public.sign-up.content.title")}
							subTitle={t("public.sign-up.content.subtitle")}
						>
							<Row gutter={128} justify={"center"}>
								<Col span={12}>
									<Card title={t("public.sign-up.content.form.title")}>
										<SignUpForm/>
									</Card>
								</Col>
								<Col span={12}>
									<Typography.Paragraph>
										<Typography.Text
											strong
											style={{fontSize: 16,}}
										>
											{t("public.sign-up.content.list.title")}
										</Typography.Text>
									</Typography.Paragraph>
									<Typography.Paragraph>
										<RightCircleOutlined style={{color: "green"}}/>&nbsp;{t("public.sign-up.content.list.item-0")}
									</Typography.Paragraph>
									<Typography.Paragraph>
										<RightCircleOutlined style={{color: "green"}}/>&nbsp;{t("public.sign-up.content.list.item-1")}
									</Typography.Paragraph>
									<Typography.Paragraph>
										<RightCircleOutlined style={{color: "green"}}/>&nbsp;{t("public.sign-up.content.list.item-2")}
									</Typography.Paragraph>
									<Typography.Paragraph>
										<RightCircleOutlined style={{color: "green"}}/>&nbsp;{t("public.sign-up.content.list.item-3")}
									</Typography.Paragraph>
									<Typography.Paragraph>
										<RightCircleOutlined style={{color: "green"}}/>&nbsp;{t("public.sign-up.content.list.item-4")}
									</Typography.Paragraph>
								</Col>
							</Row>
						</Result>
					</Card>
				</PublicView>
			);
	}
}

const SignUpView = (
	{
		t,
		status,
	}) => resolveStatus(t, status)
;

export default connect(
	state => ({
		status: getUserRegisterStatus(state),
	}),
	{},
)(withTranslation()(SignUpView));
