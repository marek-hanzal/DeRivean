import {Col, Form, Input, Row} from "antd";
import {useTranslation} from "react-i18next";

const SubtitleNameField = ({name, label, required, icon}) => {
	const {t} = useTranslation();

	return (
		<Row justify={"center"}>
			<Col span={6}>
				<Form.Item
					name={name}
					rules={[
						{
							required: true,
							message: t(required),
						}
					]}
				>
					<Input addonBefore={t(label)} suffix={icon}/>
				</Form.Item>
			</Col>
		</Row>
	);
};

export default SubtitleNameField;
