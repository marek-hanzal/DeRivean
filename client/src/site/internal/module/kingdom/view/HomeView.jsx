import {
	Card,
	Result
} from "antd";
import React from "react";
import { withTranslation } from "react-i18next";
import KingdomHomeIcon from "site/internal/module/kingdom/component/icon/KingdomHomeIcon";

const HomeView = ({t}) =>
	<Card title={t("internal.kingdom.home.title")}>
		<Result
			icon={<KingdomHomeIcon/>}
			status={"info"}
			title={t("internal.kingdom.home.content.title")}
			subTitle={t("internal.kingdom.home.content.subtitle")}
		/>
	</Card>
;

export default withTranslation()(HomeView);
