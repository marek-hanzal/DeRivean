import {PlusOutlined} from "@ant-design/icons";
import {Button, Card, Divider, Empty, Form, Input, InputNumber, List, Popconfirm, Select} from "antd";
import axios from "axios";
import EditorContext from "component/form/EditorContext";
import DeleteItemIcon from "component/icon/DeleteItemIcon";
import Centered from "component/layout/Centered";
import {useContext, useEffect, useState} from "react";
import {useTranslation} from "react-i18next";
import {useDispatch} from "react-redux";

const AttributeFieldEditor = ({translation, redux}) => {
	const dispatch = useDispatch();
	const {t} = useTranslation();
	const editorContext = useContext(EditorContext);
	const [attributes, setAttributes] = useState([]);
	useEffect(() => {
		const cancelToken = axios.CancelToken.source();
		dispatch(redux.redux.attributes.dispatch.attributes(cancelToken)).then(attributes => {
			setAttributes(attributes);
			editorContext.isReady();
		}, () => {
		});
		return () => cancelToken.cancel();
		// eslint-disable-next-line
	}, [dispatch]);
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
												options={(attributes || []).map(item => ({label: t(item), value: item}))}
												disabled={!editorContext.editor}
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
												disabled={!editorContext.editor}
											/>
										</Form.Item>
									</Input.Group>
									<Popconfirm
										okText={t("common.yes")}
										cancelText={t("common.no")}
										icon={<DeleteItemIcon/>}
										title={t(translation + ".form.attribute.deleteConfirm")}
										onConfirm={() => remove(field.name)}
										disabled={!editorContext.editor}
									>
										<Button disabled={!editorContext.editor} size={"small"} type={"danger"} ghost shape={"circle"} icon={<DeleteItemIcon/>}/>
									</Popconfirm>
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
												icon={<PlusOutlined/>}
												children={t(translation + ".form.attribute.add")}
											/>
										</List.Item>
									</Centered>
								) : null
							}
						</List> :
						<Empty
							image={Empty.PRESENTED_IMAGE_SIMPLE}
							description={t(translation + ".form.attribute.empty")}
						>
							{editorContext.editor ? (
								<>
									<Divider type={"horizontal"}/>
									<Button
										type="primary"
										ghost
										onClick={() => add()}
										icon={<PlusOutlined/>}
										children={t(translation + ".form.attribute.add")}
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
