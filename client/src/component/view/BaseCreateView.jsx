import {Card, Result, Spin} from "antd";
import CreateIcon from "component/icon/CreateIcon";
import {createElement} from "react";
import {useTranslation} from "react-i18next";

const BaseCreateView = (
	{
		id,
		open = id,
		icon = <CreateIcon/>,
		base,
		subTitle,
		isLoading,
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
		<Spin spinning={isLoading}>
			<Card title={t(`${id}.create.title`)}>
				<Result
					status={"info"}
					title={t(`${id}.create.title`)}
					subTitle={subTitle || t(`${id}.create.subtitle`)}
					icon={icon}
					children={children}
				/>
			</Card>
		</Spin>
	);
};

export default BaseCreateView;
