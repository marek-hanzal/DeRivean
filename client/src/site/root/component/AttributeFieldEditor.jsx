import {PlusOutlined} from "@ant-design/icons";
import {Button, Card, Cascader, Divider, Empty, Form, Input, InputNumber, List, Popconfirm} from "antd";
import EditorContext from "component/form/EditorContext";
import AttributeIcon from "component/icon/AttributeIcon";
import DeleteItemIcon from "component/icon/DeleteItemIcon";
import Spinner from "component/icon/Spinner";
import Centered from "component/layout/Centered";
import ModuleContext from "component/ModuleContext";
import {useContext, useState} from "react";
import {useTranslation} from "react-i18next";
import {useAttributeTypeByGroups} from "site/root/module/attribute-type/hook/hook";
import Events from "utils/Events";

const AttributeFieldEditor = ({groups = null}) => {
	const {t} = useTranslation();
	const editorContext = useContext(EditorContext);
	const moduleContext = useContext(ModuleContext);
	const [attributeGroups, setAttributes] = useState();
	useAttributeTypeByGroups(
		groups,
		Events()
			.on("success", attributes => {
				setAttributes(attributes);
				editorContext.isReady();
			})
	);
	return (
		<Card title={t(moduleContext.id + ".form.attribute.title")}>
			<Form.List
				name={"attributes"}
			>
				{(fields, {
					add,
					remove
				}) => (
					fields.length ?
						<List>
							{fields.map(field => (
								<List.Item key={field.key}>
									<Input.Group style={{display: "flex"}}>
										<Form.Item
											{...field}
											key={field.key + ".type"}
											name={[field.name, "type"]}
											fieldKey={[field.fieldKey, "type"]}
											rules={[
												{
													required: true,
													message: t(moduleContext.id + ".form.attribute.type.required")
												}
											]}
											style={{
												width: "60%",
												marginBottom: 0
											}}
										>
											<Cascader
												showSearch
												allowClear
												expandTrigger={"hover"}
												placeholder={t(moduleContext.id + ".form.attribute.name.hint")}
												disabled={!editorContext.editor}
												options={(attributeGroups || []).map(item => ({
													value: item.id,
													label: t("attribute-group." + item.name),
													children: (item.types || []).map(item => ({
														value: item.id,
														label: t("attribute." + item.name),
													}))
												}))}
												suffixIcon={<AttributeIcon/>}
											/>
										</Form.Item>
										<Form.Item
											{...field}
											key={field.key + ".value"}
											name={[field.name, "value"]}
											fieldKey={[field.fieldKey, "value"]}
											rules={[
												{
													required: true,
													message: t(moduleContext.id + ".form.attribute.value.required")
												}
											]}
											style={{
												width: "35%",
												marginBottom: 0
											}}
										>
											<InputNumber
												step={10}
												placeholder={t(moduleContext.id + ".form.attribute.value.hint")}
												style={{width: "100%"}}
												disabled={!editorContext.editor}
											/>
										</Form.Item>
									</Input.Group>
									<Popconfirm
										okText={t("common.yes")}
										cancelText={t("common.no")}
										icon={<DeleteItemIcon/>}
										title={t(moduleContext.id + ".form.attribute.deleteConfirm")}
										onConfirm={() => remove(field.name)}
										disabled={!editorContext.editor}
										children={<Button disabled={!editorContext.editor} size={"small"} type={"danger"} ghost shape={"circle"} icon={<DeleteItemIcon/>}/>}
									/>
								</List.Item>
							))}
							{
								editorContext.editor ? (
									<Centered>
										<List.Item>
											<Button
												type="primary"
												ghost
												onClick={() => add()}
												disabled={!attributeGroups}
												icon={<Spinner done={attributeGroups} icon={<PlusOutlined/>}/>}
												children={t(moduleContext.id + ".form.attribute.add")}
											/>
										</List.Item>
									</Centered>
								) : null
							}
						</List> :
						<Empty
							image={Empty.PRESENTED_IMAGE_SIMPLE}
							description={t(moduleContext.id + ".form.attribute.empty")}
						>
							{editorContext.editor ? (
								<>
									<Divider type={"horizontal"}/>
									<Button
										type="primary"
										ghost
										onClick={() => add()}
										disabled={!attributeGroups}
										icon={<Spinner done={attributeGroups} icon={<PlusOutlined/>}/>}
										children={t(moduleContext.id + ".form.attribute.add")}
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
