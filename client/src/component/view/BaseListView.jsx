import {Card} from "antd";
import useMenuOpen from "hook/useMenuOpen";
import useMenuSelect from "hook/useMenuSelect";
import {useContext} from "react";
import {useTranslation} from "react-i18next";

const BaseListView = (
	{
		context,
		children,
	}) => {
	context = useContext(context);
	const {t} = useTranslation();
	useMenuOpen(context.id);
	useMenuSelect(context.id + ".list");
	return (
		<Card title={t(`${context.id}.list.title`)}>
			{children}
		</Card>
	);
};

export default BaseListView;
