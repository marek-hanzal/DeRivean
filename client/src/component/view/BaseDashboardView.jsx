import {Card, Result} from "antd";
import {LayoutContext} from "component/layout/BaseLayout";
import ModuleContext from "component/ModuleContext";
import BackLink from "component/route/BackLink";
import {useContext} from "react";
import {useTranslation} from "react-i18next";

const BaseDashboardView = (
	{
		title = null,
		subTitle = null,
		children,
	}) => {
	const {t} = useTranslation();
	const layoutContext = useContext(LayoutContext);
	const moduleContext = useContext(ModuleContext);
	layoutContext.useMenuSelect(moduleContext.id + ".dashboard");
	return (
		<Card title={<><BackLink/>{t(`${moduleContext.id}.title`)}</>}>
			<Result
				status={"info"}
				title={title || t(`${moduleContext.id}.title`)}
				subTitle={subTitle || t(`${moduleContext.id}.subtitle`)}
				icon={moduleContext.icon}
				children={children}
			/>
		</Card>
	);
};

export default BaseDashboardView;
