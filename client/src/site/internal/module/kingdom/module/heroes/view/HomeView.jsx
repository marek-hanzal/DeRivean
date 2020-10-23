import {
	Card,
	Result
} from "antd";
import React from "react";
import { withTranslation } from "react-i18next";
import HeroesHomeIcon from "site/internal/module/kingdom/module/heroes/component/icon/HeroesHomeIcon";

const HomeView = ({t}) =>
	<Card title={t("internal.kingdom.heroes.home.title")}>
		<Result
			icon={<HeroesHomeIcon/>}
			status={"info"}
			title={t("internal.kingdom.heroes.home.content.title")}
			subTitle={t("internal.kingdom.heroes.home.content.subtitle")}
		/>
	</Card>
;

export default withTranslation()(HomeView);
