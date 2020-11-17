import {Divider, Space, Statistic} from "antd";
import {useTranslation} from "react-i18next";
import {attributeFilterByGroup} from "site/root/module/attribute/utils/utils";

const AttributeGroupStatistics = ({attributes, group}) => {
	const {t} = useTranslation();
	return (
		<Space split={<Divider type={"vertical"}/>}>
			{attributeFilterByGroup(group, attributes).map(attribute => (
				<Statistic key={attribute.type.name} title={t("attribute." + attribute.type.name)} value={attribute.value}/>
			))}
		</Space>
	);
};

export default AttributeGroupStatistics;
