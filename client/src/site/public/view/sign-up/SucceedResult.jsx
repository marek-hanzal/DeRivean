import {Button, Card, Result} from "antd";
import React from "react";
import {withTranslation} from "react-i18next";
import {Link} from "react-router-dom";
import PublicPath from "site/public/router/PublicPath";

const SucceedResult = (
	{
		t,
	}) =>
	<Card>
		<Result
			status="success"
			title={t("public.sign-up.succeed.title")}
			subTitle={t("public.sign-up.succeed.subtitle")}
			extra={[
				<Button type="primary" key="continue">
					<Link to={PublicPath.signIn}>{t("public.sign-up.continue.title")}</Link>
				</Button>
			]}
		/>
	</Card>
;

export default withTranslation()(SucceedResult);
