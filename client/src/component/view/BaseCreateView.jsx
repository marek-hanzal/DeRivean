import {Card, Result} from "antd";
import {createElement} from "react";
import {withTranslation} from "react-i18next";

const BaseCreateView = ({t, id, icon, base, children, ...props}) =>
	createElement(
		base,
		{
			id: `${id}.create`,
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
	)
;

export default withTranslation()(BaseCreateView);
