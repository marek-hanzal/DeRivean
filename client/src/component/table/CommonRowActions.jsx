import {Button, Col, Popconfirm, Row} from "antd";
import CancelIcon from "component/icon/CancelIcon";
import DeleteItemIcon from "component/icon/DeleteItemIcon";
import EditIcon from "component/icon/EditIcon";
import EditableCell from "component/table/EditableCell";
import {useTranslation} from "react-i18next";

const CommonRowActions = (
	{
		id,
		record,
		itemList,
		setItemList,
		onSaveRow,
	}) => {
	const {t} = useTranslation();
	const onDeleteRow = uuid => {
		setItemList(itemList.filter(item => item.uuid !== uuid));
	};

	const onEditRow = uuid => {
		const data = [...itemList];
		data.filter(item => item.uuid === uuid).map(item => item.editable = true);
		setItemList(data);
	};

	const onCancelRow = uuid => {
		const data = [...itemList];
		data.filter(item => item.uuid === uuid).map(item => item.editable = false);
		setItemList(data);
	};

	return (
		<EditableCell
			record={record}
			editor={() => (
				<Row justify={"space-around"}>
					<Col span={10}>
						<Button type={"primary"} size={"small"} icon={<EditIcon/>} onClick={() => onSaveRow(record)}>{t(id + ".table.save")}</Button>
					</Col>
					<Col span={10}>
						<Popconfirm
							title={t(id + ".table.cancel-confirm")}
							onConfirm={() => onCancelRow(record.uuid)}
							children={<Button type={"danger"} size={"small"} icon={<CancelIcon/>}>{t(id + ".table.cancel")}</Button>}
						/>
					</Col>
				</Row>
			)}
			value={() => (
				<Row justify={"space-around"}>
					<Col span={10}>
						<Button ghost type={"primary"} size={"small"} icon={<EditIcon/>} onClick={() => onEditRow(record.uuid)}>{t(id + ".table.edit")}</Button>
					</Col>
					<Col span={10}>
						<Popconfirm
							title={t(id + ".table.delete-confirm")}
							onConfirm={() => onDeleteRow(record.uuid)}
							children={<Button ghost type={"danger"} size={"small"} icon={<DeleteItemIcon/>}>{t(id + ".table.delete")}</Button>}
						/>
					</Col>
				</Row>
			)}
		/>
	);
};

export default CommonRowActions;
