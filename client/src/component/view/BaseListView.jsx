import {Card} from "antd";
import {createElement} from "react";
import {useTranslation} from "react-i18next";

const BaseListView = (
	{
		base,
		id,
		open = [id],
		children,
		...props
	}) => {
	const {t} = useTranslation();
	return (
		createElement(
			base,
			{
				id: `${id}.list`,
				open,
				...props
			},
			<Card title={t(`${id}.list.title`)}>
				{children}
			</Card>
		)
	);
};

export default BaseListView;
