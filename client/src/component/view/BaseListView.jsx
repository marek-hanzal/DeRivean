import {Card} from "antd";
import {LayoutContext} from "component/layout/BaseLayout";
import BackLink from "component/route/BackLink";
import {useContext} from "react";
import {useTranslation} from "react-i18next";

const BaseListView = (
	{
		context,
		children,
	}) => {
	context = useContext(context);
	const layoutContext = useContext(LayoutContext);
	const {t} = useTranslation();
	layoutContext.useMenuSelect(context.id + ".list");
	return (
		<Card title={<><BackLink/>{t(`${context.id}.list.title`)}</>}>
			{children}
		</Card>
	);
};

export default BaseListView;
