import {
	Button,
	Card,
	Empty
} from "antd";
import React from "react";
import { withTranslation } from "react-i18next";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import InternalView from "site/internal/component/InternalView";
import KingdomHeroesPath from "site/internal/module/kingdom/module/heroes/router/KingdomHeroesPath";
import HeroesList from "site/internal/module/kingdom/module/heroes/view/list/HeroesList";

const ListView = ({
					  t,
					  list
				  }) =>
	<InternalView
		open={[KingdomHeroesPath.root]}
		selected={[KingdomHeroesPath.list]}
	>
		<Card title={t("internal.kingdom.heroes.list.title")}>
			{
				list.length ?
					<HeroesList/> :
					<Empty description={null}>
						<Button type="primary"><Link to={KingdomHeroesPath.create}>{t("internal.kingdom.heroes.list.create")}</Link></Button>
					</Empty>
			}
		</Card>
	</InternalView>
;

export default connect(
	state => ({
		list: [],
	}),
	dispatch => ({}),
)(withTranslation()(ListView));
