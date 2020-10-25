import {Card, Result} from "antd";
import {createElement} from "react";
import {useTranslation} from "react-i18next";

const BaseDashboardView = ({id, icon, base, title = null, children, ...props}) => {
	const {t} = useTranslation();
	return createElement(
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
	);
};

export default BaseDashboardView;
