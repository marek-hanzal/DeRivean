import {Card} from "antd";
import React from "react";
import {withTranslation} from "react-i18next";
import RootView from "site/root/component/RootView";
import PlayerPath from "site/root/player/router/PlayerPath";

const HomeView = ({t}) =>
	<RootView
		open={[PlayerPath.root]}
		selected={[PlayerPath.home]}
	>
		<Card title={t("root.player.home.title")}>
		</Card>
	</RootView>
;

export default withTranslation()(HomeView);
