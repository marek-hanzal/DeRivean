import {Card} from "antd";
import React from "react";
import {withTranslation} from "react-i18next";

const DashboardView = ({t}) =>
	<Card title={t(`root.user.dashboard.title`)}>
	</Card>
;

export default withTranslation()(DashboardView);
