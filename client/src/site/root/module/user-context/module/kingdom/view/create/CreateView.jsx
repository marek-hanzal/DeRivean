import {PlusOutlined, RightCircleOutlined} from "@ant-design/icons";
import {Button, Card, Cascader, Col, Divider, Form, InputNumber, Result, Row, Typography} from "antd";
import SubtitleNameField from "component/form/SubtitleNameField";
import DeleteItemIcon from "component/icon/DeleteItemIcon";
import BaseCreateView from "component/view/BaseCreateView";
import {useTranslation} from "react-i18next";
import KingdomIcon from "site/root/module/kingdom/component/icon/KingdomIcon";
import KingdomView from "site/root/module/user-context/module/kingdom/view/KingdomView";
import numberRange from "utils/numberRange";

const id = "root.userContext.kingdom";
const longId = id + ".create";

const CreateView = () => {
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
		<Form name={"kingdom"} onFinish={values => console.log("Received values of form:", values)} autoComplete="off">
			<BaseCreateView
				base={KingdomView}
				id={id}
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
										{(fields, {add, remove}, {errors}) => (
											<>
												{fields.map(field => (
													<Row key={field.key} justify={"space-around"} style={{alignItems: "baseline"}}>
														<Col span={14}>
															<Form.Item
																{...field}
																label={t(longId + ".form.attribute.name.label")}
																name={[field.name, "name"]}
																fieldKey={[field.fieldKey, "name"]}
																rules={[{required: true, message: t(longId + ".form.attribute.name.required")}]}
															>
																<Cascader
																	options={cascader}
																	placeholder={t(longId + ".form.attribute.name.hint")}
																	expandTrigger={"hover"}
																	showSearch={{filter: (inputValue, path) => path.some(option => option.label.toLowerCase().indexOf(inputValue.toLowerCase()) > -1)}}
																/>
															</Form.Item>
														</Col>
														<Col span={6}>
															<Form.Item
																{...field}
																label={t(longId + ".form.attribute.value.label")}
																name={[field.name, "value"]}
																fieldKey={[field.fieldKey, "value"]}
																rules={[{required: true, message: t(longId + ".form.attribute.value.required")}]}
															>
																<InputNumber step={10} placeholder={t(longId + ".form.attribute.value.hint")}/>
															</Form.Item>
														</Col>
														<Col>
															<DeleteItemIcon onClick={() => remove(field.name)}/>
														</Col>
													</Row>
												))}
												<Button
													type="dashed"
													onClick={() => add()}
													icon={<PlusOutlined/>}
													children={t(longId + ".form.attribute.add.label")}
													style={{width: "100%"}}
												/>
												<Form.ErrorList errors={errors}/>
											</>
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
