import {Button, Result} from "antd";
import React from "react";
import {withTranslation} from "react-i18next";
import {Link} from "react-router-dom";
import InternalView from "site/internal/component/InternalView";
import InternalPath from "site/internal/router/InternalPath";

const SingInView = (
	{
		t,
	}) =>
	<InternalView
		title='internal.home.title'
		open={[InternalPath.root]}
	>
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
	</InternalView>
;

export default withTranslation()(SingInView);
