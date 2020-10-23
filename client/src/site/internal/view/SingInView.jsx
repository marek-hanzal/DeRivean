import {
	Button,
	Card,
	Result
} from "antd";
import React from "react";
import { withTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import InternalPath from "site/internal/router/InternalPath";

const SingInView = (
	{
		t,
	}) =>
	<Card>
		<Result
			status="success"
			title={t("internal.sign-in.succeed.title")}
			subTitle={t("internal.sign-in.succeed.subtitle")}
			extra={[
				<Button type="primary" key="continue">
					<Link to={InternalPath.root}>{t("internal.sign-in.continue.title")}</Link>
				</Button>
			]}
		/>
	</Card>
;

export default withTranslation()(SingInView);
