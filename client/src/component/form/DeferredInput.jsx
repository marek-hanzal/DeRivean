import {LoadingOutlined} from "@ant-design/icons";
import {Col, Input, Row} from "antd";
import {useTranslation} from "react-i18next";

const DeferredInput = ({label, item, name}) => {
	const {t} = useTranslation();
	return (
		<Row justify={"center"}>
			<Col span={6}>
				<Input addonBefore={t(label)} value={item ? item[name] : null} disabled={!item} suffix={item ? null : <LoadingOutlined/>}/>
			</Col>
		</Row>
	);
};

export default DeferredInput;
