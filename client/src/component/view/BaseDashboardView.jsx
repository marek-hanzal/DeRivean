import {Card, Result} from "antd";
import {createElement} from "react";
import {withTranslation} from "react-i18next";

const BaseDashboardView = ({t, id, icon, base, title = null, children, ...props}) =>
	createElement(
		base,
		{
			id: `${id}.dashboard`,
			...props
		},
		<Card title={t(`${id}.dashboard.title`)}>
			<Result
				status={"info"}
				title={title || t(`${id}.dashboard.title`)}
				subTitle={t(`${id}.dashboard.subtitle`)}
				icon={icon}
				children={children}
			/>
		</Card>
	)
;

export default withTranslation()(BaseDashboardView);
