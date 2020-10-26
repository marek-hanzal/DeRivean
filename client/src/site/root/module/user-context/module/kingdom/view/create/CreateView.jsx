import {RightCircleOutlined} from "@ant-design/icons";
import {Button, Col, Form, Popconfirm, Result, Row, Table, Typography} from "antd";
import SubtitleNameField from "component/form/SubtitleNameField";
import CreateItemIcon from "component/icon/CreateItemIcon";
import DeleteItemIcon from "component/icon/DeleteItemIcon";
import EditIcon from "component/icon/EditIcon";
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
		{uuid: uuid4(), name: t("resource.gold"), value: 100, description: "Current value of gold available."},
		{uuid: uuid4(), name: t("resource.stone"), value: 260, description: "Current value of stone available."},
		{uuid: uuid4(), name: t("resource.wood"), value: 320, description: "Current value of wood available."},
		{uuid: uuid4(), name: t("resource.food"), value: 500, description: "Current value of food available."},
		{uuid: uuid4(), name: t("max-heroes"), value: 8, description: "Limit number of Heroes a Kingdom could possess."},
	]);

	const columns = [
		{title: "Attribute", dataIndex: "name", key: "name"},
		{title: "Value", dataIndex: "value", key: "value", width: 120},
		{
			title: "Action",
			key: "action",
			width: 200,
			render: (text, record) => (
				record.editable ?
					"editable" :
					<Row justify={"space-around"}>
						<Col span={10}>
							<Button ghost type={"primary"} size={"small"} icon={<EditIcon/>} onClick={() => onEditRow(record.uuid)}>{t(longId + ".table.edit")}</Button>
						</Col>
						<Col span={10}>
							<Popconfirm
								title={t(longId + ".table.deleteConfirm")}
								onConfirm={() => onDeleteRow(record.uuid)}
							>
								<Button ghost type={"danger"} size={"small"} icon={<DeleteItemIcon/>}>{t(longId + ".table.delete")}</Button>
							</Popconfirm>
						</Col>
					</Row>
			)
		}
	];

	const onDeleteRow = uuid => {
		setAttributeList(attributeList.filter(item => item.uuid !== uuid));
	};

	const onEditRow = uuid => {
		alert("wwooo");
		return false;
	};

	const onCreateRow = () => {
		setAttributeList([...attributeList, {
			uuid: uuid4(),
			name: null,
			value: null,
			description: null,
			editable: true,
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
								<Button ghost type={"primary"} icon={<CreateItemIcon/>} onClick={() => onCreateRow()}>{t(longId + ".table.add")}</Button>
								<Table
									rowKey={"uuid"}
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
										size={"large"}
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
