import {
	Card,
	Result
} from "antd";
import React from "react";
import { withTranslation } from "react-i18next";
import InternalHomeIcon from "site/internal/component/icon/InternalHomeIcon";

const HomeView = ({t}) =>
	<Card title={t("internal.home.title")}>
		<Result
			icon={<InternalHomeIcon/>}
			status={"info"}
			title={t("internal.home.content.title")}
			subTitle={t("internal.home.content.subtitle")}
		/>
	</Card>
;

export default withTranslation()(HomeView);
