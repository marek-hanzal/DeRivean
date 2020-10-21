import {Card} from "antd";
import React from "react";
import {withTranslation} from "react-i18next";
import InternalView from "site/internal/component/InternalView";
import KingdomHeroesPath from "site/internal/module/kingdom/module/heroes/router/KingdomHeroesPath";

const CreateView = ({t}) =>
	<InternalView
		open={[KingdomHeroesPath.root]}
		selected={[KingdomHeroesPath.create]}
	>
		<Card title={t("internal.kingdom.heroes.create.title")}>
		</Card>
	</InternalView>
;

export default withTranslation()(CreateView);
