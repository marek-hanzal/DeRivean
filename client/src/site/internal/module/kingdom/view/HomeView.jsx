import {Card, Result} from "antd";
import React from "react";
import {withTranslation} from "react-i18next";
import InternalView from "site/internal/component/InternalView";
import KingdomHomeIcon from "site/internal/module/kingdom/component/icon/KingdomHomeIcon";
import KingdomPath from "site/internal/module/kingdom/router/KingdomPath";

const HomeView = ({t}) =>
	<InternalView
		open={[KingdomPath.root]}
		selected={[KingdomPath.home]}
	>
		<Card title={t("internal.kingdom.home.title")}>
			<Result
				icon={<KingdomHomeIcon/>}
				status={"info"}
				title={t("internal.kingdom.home.content.title")}
				subTitle={t("internal.kingdom.home.content.subtitle")}
			/>
		</Card>
	</InternalView>
;

export default withTranslation()(HomeView);
