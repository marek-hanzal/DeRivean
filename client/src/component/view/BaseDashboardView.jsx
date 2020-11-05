import {Card, Result} from "antd";
import useMenuSelect from "hook/useMenuSelect";
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
	useMenuSelect(id + ".dashboard");
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
