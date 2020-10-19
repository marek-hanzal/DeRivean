import {Card} from "antd";
import React from "react";
import {withTranslation} from "react-i18next";
import RootView from "site/root/component/RootView";
import PlayerPath from "site/root/player/router/PlayerPath";

const CreateView = ({t}) =>
	<RootView
		open={[PlayerPath.root]}
		selected={[PlayerPath.create]}
	>
		<Card title={t("root.player.create.title")}>
		</Card>
	</RootView>
;

export default withTranslation()(CreateView);
