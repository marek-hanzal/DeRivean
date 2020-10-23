import {
	Button,
	Card,
	Result
} from "antd";
import React from "react";
import { withTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import MinimalView from "site/root/component/MinimalView";
import RootPath from "site/root/router/RootPath";

const SingInView = (
	{
		t,
	}) =>
	<MinimalView
		open={[RootPath.root]}
	>
		<Card>
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
		</Card>
	</MinimalView>
;

export default withTranslation()(SingInView);
