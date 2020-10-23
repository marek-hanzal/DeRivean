import {
	Card,
	Result
} from "antd";
import React from "react";
import { withTranslation } from "react-i18next";
import InternalHomeIcon from "site/internal/component/icon/InternalHomeIcon";
import InternalView from "site/internal/component/InternalView";
import InternalPath from "site/internal/router/InternalPath";

const HomeView = ({t}) =>
	<InternalView
		open={[InternalPath.root]}
		selected={[InternalPath.root]}
	>
		<Card title={t("internal.home.title")}>
			<Result
				icon={<InternalHomeIcon/>}
				status={"info"}
				title={t("internal.home.content.title")}
				subTitle={t("internal.home.content.subtitle")}
			/>
		</Card>
	</InternalView>
;

export default withTranslation()(HomeView);
