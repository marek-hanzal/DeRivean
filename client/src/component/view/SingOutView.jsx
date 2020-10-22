import {QuestionCircleFilled} from "@ant-design/icons";
import {Button, Card, Result} from "antd";
import React from "react";
import {withTranslation} from "react-i18next";
import {withRouter} from "react-router";
import MinimalView from "site/internal/component/MinimalView";

const SingOutView = (
	{
		t,
		translation,
		history,
		onLogout,
	}) =>
	<MinimalView>
		<Card>
			<Result
				icon={<QuestionCircleFilled/>}
				title={t(`${translation}.sign-out.title`)}
				subTitle={t(`${translation}.sign-out.subtitle`)}
				extra={[
					<Button type="primary" key="sign-out" onClick={() => onLogout()}>
						{t(`${translation}.sign-out.button.sign-out`)}
					</Button>,
					<Button key="back" onClick={() => history.goBack()}>{t(`${translation}.sign-out.button.back`)}</Button>,
				]}
			>
			</Result>
		</Card>
	</MinimalView>
;

export default withRouter(withTranslation()(SingOutView));
