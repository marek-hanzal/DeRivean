import {Card, Result} from "antd";
import BackLink from "component/route/BackLink";
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
	useMenuSelect(context.id + ".dashboard");
	return (
		<Card title={<><BackLink/>{t(`${context.id}.title`)}</>}>
			<Result
				status={"info"}
				title={title || t(`${context.id}.title`)}
				subTitle={subTitle || t(`${context.id}.subtitle`)}
				icon={context.icon}
				children={children}
			/>
		</Card>
	);
};

export default BaseDashboardView;
