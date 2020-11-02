import {Card, Result} from "antd";
import {createElement} from "react";
import {useTranslation} from "react-i18next";

const BaseDashboardView = (
	{
		id,
		open = [id],
		select = [id],
		icon,
		base,
		title = null,
		subTitle = null,
		children,
		...props
	}) => {
	const {t} = useTranslation();
	return createElement(
		base,
		{
			id,
			open,
			...props
		},
		<Card title={t(`${id}.title`)}>
			<Result
				status={"info"}
				title={title || t(`${id}.title`)}
				subTitle={subTitle || t(`${id}.subtitle`)}
				icon={icon}
				children={children}
			/>
		</Card>
	);
};

export default BaseDashboardView;
