import {Col, Form, Input, Row} from "antd";
import {useTranslation} from "react-i18next";
import validationFor from "utils/form/validationFor";

const SubtitleNameField = ({name, errors = null, label, required, icon, ...props}) => {
	const {t} = useTranslation();

	return (
		<Row justify={"center"}>
			<Col span={6}>
				<Form.Item
					{...props}
					{...validationFor(name, errors, t)}
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
