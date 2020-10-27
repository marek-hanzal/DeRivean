import {PlusOutlined, RightCircleOutlined} from "@ant-design/icons";
import {Button, Card, Cascader, Col, Divider, Form, Input, InputNumber, List, Popconfirm, Result, Row, Typography} from "antd";
import SubtitleNameField from "component/form/SubtitleNameField";
import DeleteItemIcon from "component/icon/DeleteItemIcon";
import BaseCreateView from "component/view/BaseCreateView";
import {useTranslation} from "react-i18next";
import {useDispatch} from "react-redux";
import {onLoading} from "redux/loading/action";
import KingdomIcon from "site/root/module/kingdom/component/icon/KingdomIcon";
import KingdomView from "site/root/module/user-context/module/kingdom/view/KingdomView";
import numberRange from "utils/numberRange";

const id = "root.userContext.kingdom";
const longId = id + ".create";

const CreateView = () => {
	const dispatch = useDispatch();
	const [form] = Form.useForm();
	const {t} = useTranslation();

	const cascader = [
		{
			label: "Resources",
			value: "resources",
			children: [
				{
					label: "Gold",
					value: "gold",
				},
				{
					label: "Stone",
					value: "stone",
				},
				{
					label: "Wood",
					value: "wood",
				},
				{
					label: "Food",
					value: "food",
				},
			],
		},
		{
			label: "Other",
			value: "other",
			children: [
				{
					label: "Maximum Heroes",
					value: "max-heroes",
				}
			]
		}
	];

	return (
		<Form
			form={form}
			name={"kingdom"}
			autoComplete="off"
			onFinish={values => {
				dispatch(onLoading(true));
				console.log("Received values of form:", values);
				setTimeout(() => dispatch(onLoading(false)), 1200);
			}}
		>
			<BaseCreateView
				base={KingdomView}
				id={id}
				icon={<KingdomIcon/>}
				subTitle={<SubtitleNameField name={"name"} label={longId + ".form.name.label"} required={longId + ".form.name.required"} icon={<KingdomIcon/>}/>}
			>
				<Row justify={"space-around"}>
					<Col xs={24} xl={12}>
						<Row>
							<Col span={24}>
								<Card title={t(longId + ".form.attribute.title")}>
									<Form.List
										name="attributes"
									>
										{(fields, {add, remove}) => (
											<List>
												{fields.map(field => (
													<List.Item key={field.key}>
														<Input.Group style={{display: "flex"}}>
															<Form.Item
																{...field}
																key={field.key + ".attribute"}
																name={[field.name, "attribute"]}
																fieldKey={[field.fieldKey, "attribute"]}
																rules={[{required: true, message: t(longId + ".form.attribute.name.required")}]}
																style={{width: "60%", marginBottom: 0}}
															>
																<Cascader
																	options={cascader}
																	placeholder={t(longId + ".form.attribute.name.hint")}
																	expandTrigger={"hover"}
																	showSearch={{filter: (inputValue, path) => path.some(option => option.label.toLowerCase().indexOf(inputValue.toLowerCase()) > -1)}}

																/>
															</Form.Item>
															<Form.Item
																{...field}
																key={field.key + ".value"}
																name={[field.name, "value"]}
																fieldKey={[field.fieldKey, "value"]}
																rules={[{required: true, message: t(longId + ".form.attribute.value.required")}]}
																style={{width: "35%", marginBottom: 0}}
															>
																<InputNumber
																	step={10}
																	placeholder={t(longId + ".form.attribute.value.hint")}
																	style={{width: "100%"}}
																/>
															</Form.Item>
														</Input.Group>
														<Popconfirm icon={<DeleteItemIcon/>} title={"sdkjkj"} onConfirm={() => remove(field.name)}>
															<Button style={{alignSelf: "start", marginTop: 4}} size={"small"} type={"danger"} ghost shape={"circle"} icon={<DeleteItemIcon/>}/>
														</Popconfirm>
													</List.Item>
												))}
												<List.Item>
													<Button
														type="dashed"
														onClick={() => add()}
														icon={<PlusOutlined/>}
														children={t(longId + ".form.attribute.add.label")}
														style={{width: "100%"}}
													/>
												</List.Item>
											</List>
										)}
									</Form.List>
								</Card>
							</Col>
						</Row>
						<Divider type="horizontal"/>
						<Row justify={"space-around"}>
							<Col>
								<Button
									type="primary"
									size={"large"}
									htmlType="submit"
									children={t(longId + ".form.button.label")}
								/>
							</Col>
						</Row>
					</Col>
					<Col xs={24} xl={12}>
						<Result
							icon={<></>}
							title={t(longId + ".list.title")}
							style={{paddingTop: 0}}
						>
							{numberRange(4).map(index => (
								<Typography.Paragraph key={index}>
									<RightCircleOutlined style={{color: "#1890ff"}}/>&nbsp;{t(longId + ".list.item-" + index)}
								</Typography.Paragraph>
							))}
						</Result>
					</Col>
				</Row>
			</BaseCreateView>
		</Form>
	);
};

export default CreateView;
