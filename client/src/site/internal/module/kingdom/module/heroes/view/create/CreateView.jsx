import { Card } from "antd";
import React from "react";
import { withTranslation } from "react-i18next";

const CreateView = ({t}) =>
	<Card title={t("internal.kingdom.heroes.create.title")}>
	</Card>
;

export default withTranslation()(CreateView);
