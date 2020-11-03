import {Card} from "antd";
import {useContext} from "react";
import {useTranslation} from "react-i18next";

const BaseListView = (
	{
		context,
		children,
	}) => {
	context = useContext(context);
	const id = context.id;
	const {t} = useTranslation();
	return (
		<Card title={t(`${id}.list.title`)}>
			{children}
		</Card>
	);
};

export default BaseListView;
