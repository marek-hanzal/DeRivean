import {Card} from "antd";
import {LayoutContext} from "component/layout/BaseLayout";
import ModuleContext from "component/ModuleContext";
import BackLink from "component/route/BackLink";
import {useContext} from "react";
import {useTranslation} from "react-i18next";

const BaseListView = (
	{
		children,
	}) => {
	const moduleContext = useContext(ModuleContext);
	const layoutContext = useContext(LayoutContext);
	const {t} = useTranslation();
	layoutContext.useMenuSelect(moduleContext.id + ".list");
	return (
		<Card title={<><BackLink/>{t(`${moduleContext.id}.list.title`)}</>}>
			{children}
		</Card>
	);
};

export default BaseListView;
