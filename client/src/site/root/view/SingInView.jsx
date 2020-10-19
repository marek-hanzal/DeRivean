import {Button, Result} from "antd";
import React from "react";
import {withTranslation} from "react-i18next";
import {Link} from "react-router-dom";
import RootView from "site/root/component/RootView";
import RootPath from "site/root/router/RootPath";

const SingInView = (
	{
		t,
	}) =>
	<RootView
		title='root.home.title'
		open={[RootPath.root]}
	>
		<Result
			status="success"
			title={t("root.sign-in.succeed.title")}
			subTitle={t("root.sign-in.succeed.subtitle")}
			extra={[
				<Button type="primary" key="continue">
					<Link to={RootPath.root}>{t("root.sign-in.continue.title")}</Link>
				</Button>
			]}
		/>
	</RootView>
;

export default withTranslation()(SingInView);
