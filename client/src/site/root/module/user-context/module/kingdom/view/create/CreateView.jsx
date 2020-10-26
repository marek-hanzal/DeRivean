import {MinusCircleOutlined, PlusOutlined} from "@ant-design/icons";
import {Button, Form, Input, InputNumber} from "antd";
import CommonRowActions from "component/table/CommonRowActions";
import EditableCell from "component/table/EditableCell";
import {useState} from "react";
import {useTranslation} from "react-i18next";
import {v4 as uuid4} from "uuid";

const id = "root.userContext.kingdom";
const longId = id + ".create";

const CreateView = () => {
	const {t} = useTranslation();
	const [attributeList, setAttributeList] = useState([
		{uuid: uuid4(), name: t("resource.gold"), value: 100, description: "Current value of gold available."},
		{uuid: uuid4(), name: t("resource.stone"), value: 260, description: "Current value of stone available."},
		{uuid: uuid4(), name: t("resource.wood"), value: 320, description: "Current value of wood available."},
		{uuid: uuid4(), name: t("resource.food"), value: 500, description: "Current value of food available."},
		{uuid: uuid4(), name: t("max-heroes"), value: 8, description: "Limit number of Heroes a Kingdom could possess."},
	]);

	const onCreateRow = () => {
		setAttributeList([...attributeList, {
			uuid: uuid4(),
			name: null,
			value: null,
			description: null,
			editable: true,
		}]);
	};

	const onSaveRow = row => {
		console.log("save", row);
	};

	const onChangeRow = (uuid, change) => {
		const data = [...attributeList];
		data.filter(item => item.uuid === uuid).map(item => Object.assign(item, change));
		setAttributeList(data);
	};

	const columns = [
		{
			title: "Attribute",
			dataIndex: "name",
			key: "name",
			render: (text, record) => (
				null
			)
		},
		{
			title: "Value",
			dataIndex: "value",
			key: "value",
			width: 160,
			render: (text, record) => (
				<EditableCell
					record={record}
					value={() => record.value}
					editor={() => <InputNumber value={record.value} size={"small"} min={0} step={0.1} onChange={value => onChangeRow(record.uuid, {value})}/>}
				/>
			)
		},
		{
			title: "Action",
			key: "action",
			width: 200,
			render: (text, record) => <CommonRowActions
				itemList={attributeList}
				setItemList={setAttributeList}
				id={longId}
				record={record}
				onSaveRow={onSaveRow}
			/>
		}
	];

	const formItemLayout = {
		labelCol: {
			xs: {span: 24},
			sm: {span: 4},
		},
		wrapperCol: {
			xs: {span: 24},
			sm: {span: 20},
		},
	};
	const formItemLayoutWithOutLabel = {
		wrapperCol: {
			xs: {span: 24, offset: 0},
			sm: {span: 20, offset: 4},
		},
	};

	return (
		<Form name="dynamic_form_item" {...formItemLayoutWithOutLabel} onFinish={values => console.log(values)}>
			<Form.List
				name="names"
				rules={[
					{
						validator: async (_, names) => {
							if (!names || names.length < 2) {
								return Promise.reject(new Error("At least 2 passengers"));
							}
						},
					},
				]}
			>
				{(fields, {add, remove}, {errors}) => (
					<>
						{fields.map((field, index) => (
							<Form.Item
								{...(index === 0 ? formItemLayout : formItemLayoutWithOutLabel)}
								label={index === 0 ? "Passengers" : ""}
								required={false}
								key={field.key}
							>
								<Form.Item
									{...field}
									validateTrigger={["onChange", "onBlur"]}
									rules={[
										{
											required: true,
											whitespace: true,
											message: "Please input passenger's name or delete this field.",
										},
									]}
									noStyle
								>
									<Input placeholder="passenger name" style={{width: "60%"}}/>
								</Form.Item>
								<MinusCircleOutlined
									className="dynamic-delete-button"
									onClick={() => remove(field.name)}
								/>
							</Form.Item>
						))}
						<Form.Item>
							<Button
								type="dashed"
								onClick={() => add()}
								style={{width: "60%"}}
								icon={<PlusOutlined/>}
							>
								Add field
							</Button>
							<Button
								type="dashed"
								onClick={() => {
									add("The head item", 0);
								}}
								style={{width: "60%", marginTop: "20px"}}
								icon={<PlusOutlined/>}
							>
								Add field at head
							</Button>
							<Form.ErrorList errors={errors}/>
						</Form.Item>
					</>
				)}
			</Form.List>
			<Form.Item>
				<Button type="primary" htmlType="submit">
					Submit
				</Button>
			</Form.Item>
		</Form>




		// <Form name={"kingdom"} onFinish={values => console.log("Received values of form:", values)} autoComplete="off">
		// 	<BaseCreateView
		// 		base={KingdomView}
		// 		id={id}
		// 		subTitle={<SubtitleNameField name={"name"} label={longId + ".form.name.label"} required={longId + ".form.name.required"} icon={<KingdomIcon/>}/>}
		// 	>
		// 		<Row justify={"space-around"}>
		// 			<Col xs={24} xl={12}>
		// 				<Row>
		// 					<Col span={24}>
		// 					</Col>
		// 				</Row>
		// 				<hr/>
		// 				<Row>
		// 					<Col>
		// 						<Markdown children={t(longId + ".table.attribute-hint")}/>
		// 					</Col>
		// 				</Row>
		// 				<Row justify={"space-around"}>
		// 					<Col>
		// 						<Form.Item>
		// 							<Button
		// 								type="primary"
		// 								size={"large"}
		// 								htmlType="submit"
		// 								children={t(longId + ".form.button.label")}
		// 							/>
		// 						</Form.Item>
		// 					</Col>
		// 				</Row>
		// 			</Col>
		// 			<Col xs={24} xl={12}>
		// 				<Result
		// 					icon={<></>}
		// 					title={t(longId + ".list.title")}
		// 					style={{paddingTop: 0}}
		// 				>
		// 					{numberRange(4).map(index => (
		// 						<Typography.Paragraph key={index}>
		// 							<RightCircleOutlined style={{color: "#1890ff"}}/>&nbsp;{t(longId + ".list.item-" + index)}
		// 						</Typography.Paragraph>
		// 					))}
		// 				</Result>
		// 			</Col>
		// 		</Row>
		// 	</BaseCreateView>
		// </Form>
	);
};

export default CreateView;
