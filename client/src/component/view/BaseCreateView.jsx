import {Card, Result} from "antd";
import {createElement} from "react";
import {useTranslation} from "react-i18next";

const BaseCreateView = (
	{
		id,
		open = id,
		icon,
		base,
		children,
		...props
	}) => {
	const {t} = useTranslation();
	return createElement(
		base,
		{
			id: `${id}.create`,
			open,
			...props
		},
		<Card title={t(`${id}.create.title`)}>
			<Result
				status={"info"}
				title={t(`${id}.create.title`)}
				subTitle={t(`${id}.create.subtitle`)}
				icon={icon}
				children={children}
			/>
		</Card>
	);
};

export default BaseCreateView;
