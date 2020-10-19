import {Button, Card, Result} from "antd";
import React from "react";
import {withTranslation} from "react-i18next";
import {Link} from "react-router-dom";
import PublicView from "site/public/component/PublicView";
import PublicPath from "site/public/router/PublicPath";

const SingOutView = (
	{
		t,
	}) =>
	<PublicView
		title='public.home.title'
		open={[PublicPath.root]}
	>
		<Card>
			<Result
				status="success"
				title={t("public.sign-out.succeed.title")}
				subTitle={t("public.sign-out.succeed.subtitle")}
				extra={[
					<Button type="primary" key="continue">
						<Link to={PublicPath.root}>{t("public.sign-out.continue.title")}</Link>
					</Button>
				]}
			/>
		</Card>
	</PublicView>
;

export default withTranslation()(SingOutView);
