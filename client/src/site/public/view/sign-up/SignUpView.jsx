import { RightCircleOutlined } from "@ant-design/icons";
import {
	Card,
	Col,
	Result,
	Row,
	Typography
} from "antd";
import SignUpIcon from "component/icon/SignUpIcon";
import React from "react";
import { withTranslation } from "react-i18next";
import { connect } from "react-redux";
import { getUserRegisterStatus } from "redux/user/register/selector";
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
				<Card title={t("public.sign-up.title")}>
					<Result
						icon={<SignUpIcon/>}
						status={"info"}
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
								{[0, 1, 2, 3, 4].map(index => (
									<Typography.Paragraph key={index}>
										<RightCircleOutlined style={{color: "#1890ff"}}/>&nbsp;{t("public.sign-up.content.list.item-" + index)}
									</Typography.Paragraph>
								))}
							</Col>
						</Row>
					</Result>
				</Card>
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
