import {Divider, Space} from "antd";
import {useTranslation} from "react-i18next";
import {attributeFilterByGroup} from "site/root/module/attribute/utils/utils";

const AttributeGroupItems = ({attributes, group}) => {
	const {t} = useTranslation();
	return (
		<>
			<strong>{t("attribute-group." + group)}:&nbsp;</strong>
			<Space split={<Divider type={"vertical"}/>} size={"small"}>
				{attributeFilterByGroup(group, attributes).map(attribute => (
					<span key={attribute.type.name}><strong>{t("attribute." + attribute.type.name)}:</strong>&nbsp;{attribute.value}</span>
				))}
			</Space>
		</>
	);
};

export default AttributeGroupItems;
