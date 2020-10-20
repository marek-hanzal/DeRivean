import {LoginOutlined, RightCircleOutlined} from "@ant-design/icons";
import {Card, Col, Result, Row, Typography} from "antd";
import React from "react";
import {withTranslation} from "react-i18next";
import PublicView from "site/public/component/PublicView";
import PublicPath from "site/public/router/PublicPath";
import SignInForm from "site/public/view/sing-in/SignInForm";

const SingInView = ({t}) =>
	<PublicView
		open={[PublicPath.root]}
		selected={[PublicPath.signIn]}
	>
		<Card title={t("public.sign-in.title")}>
			<Result
				icon={<LoginOutlined/>}
				status={"success"}
				title={t("public.sign-in.content.title")}
				subTitle={t("public.sign-in.content.subtitle")}
			>
				<Row gutter={128} justify={"center"}>
					<Col span={12}>
						<Card title={t("public.sign-in.content.form.title")}>
							<SignInForm/>
						</Card>
					</Col>
					<Col span={12}>
						<Typography.Paragraph>
							<Typography.Text
								strong
								style={{fontSize: 16,}}
							>
								{t("public.sign-in.content.list.title")}
							</Typography.Text>
						</Typography.Paragraph>
						<Typography.Paragraph>
							<RightCircleOutlined style={{color: "green"}}/>&nbsp;{t("public.sign-in.content.list.item-0")}
						</Typography.Paragraph>
						<Typography.Paragraph>
							<RightCircleOutlined style={{color: "green"}}/>&nbsp;{t("public.sign-in.content.list.item-1")}
						</Typography.Paragraph>
						<Typography.Paragraph>
							<RightCircleOutlined style={{color: "green"}}/>&nbsp;{t("public.sign-in.content.list.item-2")}
						</Typography.Paragraph>
						<Typography.Paragraph>
							<RightCircleOutlined style={{color: "green"}}/>&nbsp;{t("public.sign-in.content.list.item-3")}
						</Typography.Paragraph>
					</Col>
				</Row>
			</Result>
		</Card>
	</PublicView>
;

export default withTranslation()(SingInView);
