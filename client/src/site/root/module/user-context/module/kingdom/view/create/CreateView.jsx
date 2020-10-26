import {RightCircleOutlined} from "@ant-design/icons";
import {Button, Col, Form, Popconfirm, Result, Row, Table, Typography} from "antd";
import SubtitleNameField from "component/form/SubtitleNameField";
import CreateItemIcon from "component/icon/CreateItemIcon";
import DeleteItemIcon from "component/icon/DeleteItemIcon";
import BaseCreateView from "component/view/BaseCreateView";
import {useState} from "react";
import {useTranslation} from "react-i18next";
import KingdomIcon from "site/root/module/kingdom/component/icon/KingdomIcon";
import KingdomView from "site/root/module/user-context/module/kingdom/view/KingdomView";
import numberRange from "utils/numberRange";
import {v4 as uuid4} from "uuid";

const id = "root.userContext.kingdom";
const longId = id + ".create";

const CreateView = () => {
	const {t} = useTranslation();
	const [attributeList, setAttributeList] = useState([
		{key: 1, name: t("resource.gold"), value: 100, description: "Current value of gold available."},
		{key: 3, name: t("resource.stone"), value: 260, description: "Current value of stone available."},
		{key: 5, name: t("resource.wood"), value: 320, description: "Current value of wood available."},
		{key: 7, name: t("resource.food"), value: 500, description: "Current value of food available."},
		{key: 9, name: t("max-heroes"), value: 8, description: "Limit number of Heroes a Kingdom could possess."},
	]);

	const columns = [
		{title: "Attribute", dataIndex: "name", key: "name"},
		{title: "Value", dataIndex: "value", key: "value", width: 120},
		{
			title: "Action",
			key: "action",
			width: 120,
			render: (text, record) => (
				<Popconfirm
					title={t(longId + ".table.deleteConfirm")}
					onConfirm={() => onDeleteRow(record.key)}
				>
					<Button icon={<DeleteItemIcon/>}>{t(longId + ".table.delete")}</Button>
				</Popconfirm>
			)
		}
	];

	const onDeleteRow = (id) => {
		setAttributeList(attributeList.filter(item => item.key !== id));
	};

	const onCreateRow = () => {
		setAttributeList([...attributeList, {
			key: uuid4(),
			name: "some-attribute" + uuid4(),
			value: Math.random() * 100,
			description: "[Description of the things]",
		}]);
	};

	return (
		<Form name={"kingdom"}>
			<BaseCreateView
				base={KingdomView}
				id={id}
				subTitle={<SubtitleNameField name={"name"} label={longId + ".form.name.label"} required={longId + ".form.name.required"} icon={<KingdomIcon/>}/>}
			>
				<Row>
					<Col span={12}>
						<Row>
							<Col span={24}>
								<Button icon={<CreateItemIcon/>} onClick={() => onCreateRow()}>{t(longId + ".table.add")}</Button>
								<Table
									size={"small"}
									pagination={false}
									columns={columns}
									expandedRowRender={record => <p>{record.description}</p>}
									dataSource={attributeList}
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
							icon={<></>}
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
