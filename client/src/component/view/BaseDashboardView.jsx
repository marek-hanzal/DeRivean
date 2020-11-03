import {Card, Result} from "antd";
import {useContext} from "react";
import {useTranslation} from "react-i18next";

const BaseDashboardView = (
	{
		context,
		title = null,
		subTitle = null,
		children,
	}) => {
	const {t} = useTranslation();
	context = useContext(context);
	const id = context.id;
	const icon = context.icon;
	return (
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
