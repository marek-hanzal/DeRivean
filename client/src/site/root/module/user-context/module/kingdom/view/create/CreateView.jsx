import {RightCircleOutlined} from "@ant-design/icons";
import {Button, Col, Form, Input, Result, Row, Table, Typography} from "antd";
import DeleteItemIcon from "component/icon/DeleteItemIcon";
import BaseCreateView from "component/view/BaseCreateView";
import {useTranslation} from "react-i18next";
import KingdomIcon from "site/root/module/kingdom/component/icon/KingdomIcon";
import KingdomView from "site/root/module/user-context/module/kingdom/view/KingdomView";
import numberRange from "utils/numberRange";

const id = "root.userContext.kingdom";
const longId = id + ".create";

const SubtitleNameField = ({name, label, required}) => {
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
					<Input addonBefore={t(label)} suffix={<KingdomIcon/>}/>
				</Form.Item>
			</Col>
		</Row>
	);
};

const CreateView = () => {
	const {t} = useTranslation();

	const columns = [
		{title: "Attribute", dataIndex: "name", key: "name"},
		{title: "Value", dataIndex: "value", key: "value", width: 120},
		{title: "Action", key: "action", width: 120, render: () => <Button icon={<DeleteItemIcon/>}>Boom</Button>},
	];

	const data = [
		{key: 1, name: t("resource.gold"), value: 3.2, description: "Current value of gold available."},
		{key: 2, name: t("resource.stone"), value: 4.2, description: "Current value of stone available."},
		{key: 3, name: t("resource.wood"), value: 3.2, description: "Current value of wood available."},
		{key: 4, name: t("resource.food"), value: 3.2, description: "Current value of food available."},
	];

	return (
		<Form name={"kingdom"}>
			<BaseCreateView
				base={KingdomView}
				id={id}
				subTitle={<SubtitleNameField name={"name"} label={longId + ".form.name.label"} required={longId + ".form.name.required"}/>}
			>
				<Row>
					<Col span={12}>
						<Row>
							<Col span={24}>
								<Table
									pagination={false}
									columns={columns}
									expandedRowRender={record => <p>{record.description}</p>}
									dataSource={data}
								/>
							</Col>
						</Row>
						<Row>&nbsp;</Row>
						<Row justify={"space-around"} align={"middle"}>
							<Col span={6}>
								<Form.Item>
									<Button
										type="primary"
										htmlType="submit"
									>
										{t(longId + ".form.button.label")}
									</Button>
								</Form.Item>
							</Col>
						</Row>
					</Col>
					<Col span={12}>
						<Result
							icon={<KingdomIcon/>}
							title={t(longId + ".list.title")}
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
