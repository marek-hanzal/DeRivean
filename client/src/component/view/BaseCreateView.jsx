import {Card, Result} from "antd";
import CreateIcon from "component/icon/CreateIcon";
import {createElement} from "react";
import {useTranslation} from "react-i18next";

const BaseCreateView = (
	{
		id,
		open = [id],
		icon = <CreateIcon/>,
		base,
		title,
		subTitle,
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
				title={title || t(`${id}.create.title`)}
				subTitle={subTitle || t(`${id}.create.subtitle`)}
				icon={icon}
				children={children}
			/>
		</Card>
	);
};

export default BaseCreateView;
