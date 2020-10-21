import {MehOutlined} from "@ant-design/icons";
import {Card, Result} from "antd";
import React from "react";
import {withTranslation} from "react-i18next";
import InternalView from "site/internal/component/InternalView";
import KingdomHeroesPath from "site/internal/module/kingdom/module/heroes/router/KingdomHeroesPath";

const HomeView = ({t}) =>
	<InternalView
		open={[KingdomHeroesPath.root]}
		selected={[KingdomHeroesPath.home]}
	>
		<Card title={t("internal.kingdom.heroes.home.title")}>
			<Result
				icon={<MehOutlined/>}
				status={"info"}
				title={t("internal.kingdom.heroes.home.content.title")}
				subTitle={t("internal.kingdom.heroes.home.content.subtitle")}
			/>
		</Card>
	</InternalView>
;

export default withTranslation()(HomeView);
