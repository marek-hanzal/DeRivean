import {Card} from "antd";
import React from "react";
import {withTranslation} from "react-i18next";
import InternalView from "site/internal/component/InternalView";
import KingdomHeroesPath from "site/internal/kingdom/heroes/router/KingdomHeroesPath";
import HeroesList from "site/internal/kingdom/heroes/view/list/HeroesList";

const ListView = ({t}) =>
	<InternalView
		open={[KingdomHeroesPath.root]}
		selected={[KingdomHeroesPath.list]}
	>
		<Card title={t("internal.kingdom.heroes.list.title")}>
			<HeroesList/>
		</Card>
	</InternalView>
;

export default withTranslation()(ListView);
