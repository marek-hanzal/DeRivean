import {PlusOutlined} from "@ant-design/icons";
import {Button, Card, Col, Divider, Empty, Form, Input, InputNumber, List, Popconfirm, Row, Select} from "antd";
import DeleteItemIcon from "component/icon/DeleteItemIcon";
import {useTranslation} from "react-i18next";

const AttributeFieldEditor = ({translation, values, editor = true, attributes}) => {
	const {t} = useTranslation();
	return (
		<Card title={t(translation + ".form.attribute.title")}>
			<Form.List
				name="attributes"
			>
				{(fields, {add, remove}) => (
					fields.length ?
						<List>
							{fields.map(field => (
								<List.Item key={field.key}>
									<Input.Group style={{display: "flex"}}>
										<Form.Item
											{...field}
											key={field.key + ".attribute"}
											name={[field.name, "attribute"]}
											fieldKey={[field.fieldKey, "attribute"]}
											rules={[{required: true, message: t(translation + ".form.attribute.name.required")}]}
											style={{width: "60%", marginBottom: 0}}
										>
											<Select
												showSearch
												allowClear
												placeholder={t(translation + ".form.attribute.name.hint")}
												options={(attributes || []).map(item => ({label: t("common.attribute." + item), value: item}))}
											/>
										</Form.Item>
										<Form.Item
											{...field}
											key={field.key + ".value"}
											name={[field.name, "value"]}
											fieldKey={[field.fieldKey, "value"]}
											rules={[{required: true, message: t(translation + ".form.attribute.value.required")}]}
											style={{width: "35%", marginBottom: 0}}
										>
											<InputNumber
												step={10}
												placeholder={t(translation + ".form.attribute.value.hint")}
												style={{width: "100%"}}
											/>
										</Form.Item>
									</Input.Group>
									<Popconfirm
										okText={t("common.yes")}
										cancelText={t("common.no")}
										icon={<DeleteItemIcon/>}
										title={t(translation + ".form.attribute.deleteConfirm")}
										onConfirm={() => remove(field.name)}
									>
										<Button style={{alignSelf: "start", marginTop: 4}} size={"small"} type={"danger"} ghost shape={"circle"} icon={<DeleteItemIcon/>}/>
									</Popconfirm>
								</List.Item>
							))}
							{
								editor ? (
									<Row justify={"center"}>
										<Col>
											<List.Item>
												<Button
													type="primary"
													ghost
													onClick={() => add()}
													icon={<PlusOutlined/>}
													children={t(translation + ".form.attribute.add.label")}
												/>
											</List.Item>
										</Col>
									</Row>
								) : null
							}
						</List> :
						<Empty
							image={Empty.PRESENTED_IMAGE_SIMPLE}
							description={t(translation + ".form.attribute.empty")}
						>
							{editor ? (
								<>
									<Divider type={"horizontal"}/>
									<Button
										type="primary"
										ghost
										onClick={() => add()}
										icon={<PlusOutlined/>}
										children={t(translation + ".form.attribute.add.label")}
									/>
								</>
							) : null}
						</Empty>
				)}
			</Form.List>
		</Card>
	);
};

export default AttributeFieldEditor;
