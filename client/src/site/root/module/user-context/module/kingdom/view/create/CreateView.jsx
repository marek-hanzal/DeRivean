import {RightCircleOutlined} from "@ant-design/icons";
import {Button, Col, Form, InputNumber, Result, Row, Table, Typography} from "antd";
import SubtitleNameField from "component/form/SubtitleNameField";
import CreateItemIcon from "component/icon/CreateItemIcon";
import Markdown from "component/Markdown";
import CommonRowActions from "component/table/CommonRowActions";
import EditableCell from "component/table/EditableCell";
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

	return (
		<Form name={"kingdom"}>
			<BaseCreateView
				base={KingdomView}
				id={id}
				subTitle={<SubtitleNameField name={"name"} label={longId + ".form.name.label"} required={longId + ".form.name.required"} icon={<KingdomIcon/>}/>}
			>
				<Row justify={"space-around"}>
					<Col xs={24} xl={12}>
						<Row>
							<Col span={24}>
								<Row>
									<Col span={24}>
										<Button ghost type={"primary"} icon={<CreateItemIcon/>} onClick={() => onCreateRow()}>{t(longId + ".table.add")}</Button>
									</Col>
								</Row>
								<Row>
									<Col span={24}>
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
							</Col>
						</Row>
						<hr/>
						<Row>
							<Col>
								<Markdown children={t(longId + ".table.attribute-hint")}/>
							</Col>
						</Row>
						<Row justify={"space-around"}>
							<Col>
								<Form.Item>
									<Button
										type="primary"
										size={"large"}
										htmlType="submit"
										children={t(longId + ".form.button.label")}
									/>
								</Form.Item>
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
