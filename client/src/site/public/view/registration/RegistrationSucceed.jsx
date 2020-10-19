import {Button, Result} from "antd";
import React from "react";
import {withTranslation} from "react-i18next";
import {Link} from "react-router-dom";
import PublicPath from "site/public/router/PublicPath";

const RegistrationSucceed = (
	{
		t,
	}) =>
	<Result
		status="success"
		title={t("public.registration.succeed.title")}
		subTitle={t("public.registration.succeed.subtitle")}
		extra={[
			<Button type="primary" key="continue">
				<Link to={PublicPath.login}>{t("public.registration.continue.title")}</Link>
			</Button>
		]}
	/>
;

export default withTranslation()(RegistrationSucceed);
