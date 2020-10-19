import {CarryOutOutlined, LoginOutlined, SmileOutlined} from "@ant-design/icons";
import {Button, Result} from "antd";
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
		/>
	</PublicView>
;

export default withTranslation()(HomeView);
