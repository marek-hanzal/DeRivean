import {CrownOutlined} from "@ant-design/icons";
import {Card, Result} from "antd";
import React from "react";
import {withTranslation} from "react-i18next";
import InternalView from "site/internal/component/InternalView";
import KingdomPath from "site/internal/module/kingdom/router/KingdomPath";

const HomeView = ({t}) =>
	<InternalView
		open={[KingdomPath.root]}
		selected={[KingdomPath.home]}
	>
		<Card title={t("internal.kingdom.home.title")}>
			<Result
				icon={<CrownOutlined/>}
				status={"info"}
				title={t("internal.kingdom.home.content.title")}
				subTitle={t("internal.kingdom.home.content.subtitle")}
			/>
		</Card>
	</InternalView>
;

export default withTranslation()(HomeView);
