import {RobotOutlined} from "@ant-design/icons";
import {Card, Result} from "antd";
import React from "react";
import {withTranslation} from "react-i18next";
import InternalView from "site/internal/component/InternalView";
import InternalPath from "site/internal/router/InternalPath";

const HomeView = ({t}) =>
	<InternalView
		open={[InternalPath.root]}
		selected={[InternalPath.root]}
	>
		<Card title={t("internal.home.title")}>
			<Result
				icon={<RobotOutlined/>}
				status={"info"}
				title={t("internal.home.content.title")}
				subTitle={t("internal.home.content.subtitle")}
			/>
		</Card>
	</InternalView>
;

export default withTranslation()(HomeView);
