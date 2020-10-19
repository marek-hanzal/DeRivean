import {CarryOutOutlined, LoginOutlined, SmileOutlined} from "@ant-design/icons";
import {Button, Card, Result, Typography} from "antd";
import React from "react";
import {withTranslation} from "react-i18next";
import {Link} from "react-router-dom";
import PublicView from "site/public/component/PublicView";
import PublicPath from "site/public/router/PublicPath";

const HomeView = (
	{
		t,
	}) =>
	<PublicView
		title='public.home.title'
		open={[PublicPath.root]}
		selected={[PublicPath.root]}
	>
		<Card>
			<Result
				icon={<SmileOutlined/>}
				status={"success"}
				title={t("public.home.content.title")}
				subTitle={t("public.home.content.subtitle")}
				extra={[
					<Button type="primary" key="sign-in">
						<Link to={PublicPath.signIn}><LoginOutlined/>&nbsp;{t("public.home.sign-in.title")}</Link>
					</Button>,
					<Button key="sign-up">
						<Link to={PublicPath.signUp}><CarryOutOutlined/>&nbsp;{t("public.home.sign-up.title")}</Link>
					</Button>,
				]}
			>
				<div className="desc">
					<Typography.Paragraph>
						<Typography.Text
							strong
							style={{
								fontSize: 16,
							}}
						>
							{t("public.home.content.list.title")}
						</Typography.Text>
					</Typography.Paragraph>
					<Typography.Paragraph>
						<SmileOutlined style={{color: "green"}}/>&nbsp;{t("public.home.content.list.item-0")}
					</Typography.Paragraph>
					<Typography.Paragraph>
						<SmileOutlined style={{color: "green"}}/>&nbsp;{t("public.home.content.list.item-1")}
					</Typography.Paragraph>
					<Typography.Paragraph>
						<SmileOutlined style={{color: "green"}}/>&nbsp;{t("public.home.content.list.item-2")}
					</Typography.Paragraph>
				</div>
			</Result>
		</Card>;
	</PublicView>
;

export default withTranslation()(HomeView);
