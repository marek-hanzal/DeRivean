import { PlusOutlined } from "@ant-design/icons";
import {
	Button,
	Card,
	Divider,
	Empty,
	Form,
	Input,
	InputNumber,
	List,
	Popconfirm,
	Select
} from "antd";
import EditorContext from "component/form/EditorContext";
import DeleteItemIcon from "component/icon/DeleteItemIcon";
import Spinner from "component/icon/Spinner";
import Centered from "component/layout/Centered";
import {
	useContext,
	useState
} from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router";

const AttributeFieldEditor = ({currentContext}) => {
	const {t}                         = useTranslation();
	const editorContext               = useContext(EditorContext);
	const [attributes, setAttributes] = useState();
	const params                      = useParams();
	currentContext.attributes(
		params[currentContext.param],
		attributes => {
			setAttributes(attributes);
			editorContext.isReady();
		}
	);
	return (
		<Card title={t(currentContext.id + ".form.attribute.title")}>
			<Form.List
				name="attributes"
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
											key={field.key + ".attribute"}
											name={[field.name, "attribute"]}
											fieldKey={[field.fieldKey, "attribute"]}
											rules={[
												{
													required: true,
													message:  t(currentContext.id + ".form.attribute.name.required")
												}
											]}
											style={{
												width:        "60%",
												marginBottom: 0
											}}
										>
											<Select
												showSearch
												allowClear
												placeholder={t(currentContext.id + ".form.attribute.name.hint")}
												options={(attributes || []).map(item => ({
													label: t(item),
													value: item
												}))}
												disabled={!editorContext.editor}
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
													message:  t(currentContext.id + ".form.attribute.value.required")
												}
											]}
											style={{
												width:        "35%",
												marginBottom: 0
											}}
										>
											<InputNumber
												step={10}
												placeholder={t(currentContext.id + ".form.attribute.value.hint")}
												style={{width: "100%"}}
												disabled={!editorContext.editor}
											/>
										</Form.Item>
									</Input.Group>
									<Popconfirm
										okText={t("common.yes")}
										cancelText={t("common.no")}
										icon={<DeleteItemIcon/>}
										title={t(currentContext.id + ".form.attribute.deleteConfirm")}
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
												disabled={!attributes}
												icon={<Spinner done={attributes} icon={<PlusOutlined/>}/>}
												children={t(currentContext.id + ".form.attribute.add")}
											/>
										</List.Item>
									</Centered>
								) : null
							}
						</List> :
						<Empty
							image={Empty.PRESENTED_IMAGE_SIMPLE}
							description={t(currentContext.id + ".form.attribute.empty")}
						>
							{editorContext.editor ? (
								<>
									<Divider type={"horizontal"}/>
									<Button
										type="primary"
										ghost
										onClick={() => add()}
										disabled={!attributes}
										icon={<Spinner done={attributes} icon={<PlusOutlined/>}/>}
										children={t(currentContext.id + ".form.attribute.add")}
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
