import {Card, Result} from "antd";
import React from "react";
import {withTranslation} from "react-i18next";
import InternalView from "site/internal/component/InternalView";
import HeroesHomeIcon from "site/internal/module/kingdom/module/heroes/component/icon/HeroesHomeIcon";
import KingdomHeroesPath from "site/internal/module/kingdom/module/heroes/router/KingdomHeroesPath";

const HomeView = ({t}) =>
	<InternalView
		open={[KingdomHeroesPath.root]}
		selected={[KingdomHeroesPath.home]}
	>
		<Card title={t("internal.kingdom.heroes.home.title")}>
			<Result
				icon={<HeroesHomeIcon/>}
				status={"info"}
				title={t("internal.kingdom.heroes.home.content.title")}
				subTitle={t("internal.kingdom.heroes.home.content.subtitle")}
			/>
		</Card>
	</InternalView>
;

export default withTranslation()(HomeView);
