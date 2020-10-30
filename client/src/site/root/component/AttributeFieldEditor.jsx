import {PlusOutlined} from "@ant-design/icons";
import {Button, Card, Divider, Empty, Form, Input, InputNumber, List, Popconfirm, Select} from "antd";
import DeleteItemIcon from "component/icon/DeleteItemIcon";
import Centered from "component/layout/Centered";
import {useTranslation} from "react-i18next";

const AttributeFieldEditor = ({translation, edit = true, attributes}) => {
	const {t} = useTranslation(["common"]);
	return (
		<Card title={t(translation + ":form.attribute.title")}>
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
											rules={[{required: true, message: t(translation + ":form.attribute.name.required")}]}
											style={{width: "60%", marginBottom: 0}}
										>
											<Select
												showSearch
												allowClear
												placeholder={t(translation + ":form.attribute.name.hint")}
												options={(attributes || []).map(item => ({label: t(translation + ":attribute." + item), value: item}))}
												disabled={!edit}
											/>
										</Form.Item>
										<Form.Item
											{...field}
											key={field.key + ".value"}
											name={[field.name, "value"]}
											fieldKey={[field.fieldKey, "value"]}
											rules={[{required: true, message: t(translation + ":form.attribute.value.required")}]}
											style={{width: "35%", marginBottom: 0}}
										>
											<InputNumber
												step={10}
												placeholder={t(translation + ":form.attribute.value.hint")}
												style={{width: "100%"}}
												disabled={!edit}
											/>
										</Form.Item>
									</Input.Group>
									{edit ?
										<Popconfirm
											okText={t("common:yes")}
											cancelText={t("common:no")}
											icon={<DeleteItemIcon/>}
											title={t(translation + ":form.attribute.deleteConfirm")}
											onConfirm={() => remove(field.name)}
										>
											<Button style={{alignSelf: "start", marginTop: 4}} size={"small"} type={"danger"} ghost shape={"circle"} icon={<DeleteItemIcon/>}/>
										</Popconfirm> : null}
								</List.Item>
							))}
							{
								edit ? (
									<Centered>
										<List.Item>
											<Button
												type="primary"
												ghost
												onClick={() => add()}
												icon={<PlusOutlined/>}
												children={t(translation + ":form.attribute.add.label")}
											/>
										</List.Item>
									</Centered>
								) : null
							}
						</List> :
						<Empty
							image={Empty.PRESENTED_IMAGE_SIMPLE}
							description={t(translation + ":form.attribute.empty")}
						>
							{edit ? (
								<>
									<Divider type={"horizontal"}/>
									<Button
										type="primary"
										ghost
										onClick={() => add()}
										icon={<PlusOutlined/>}
										children={t(translation + ":form.attribute.add.label")}
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
