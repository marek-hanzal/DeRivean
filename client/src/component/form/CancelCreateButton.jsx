import {Button, Form, Popconfirm} from "antd";
import DeleteItemIcon from "component/icon/DeleteItemIcon";
import {useTranslation} from "react-i18next";

const CancelCreateButton = (
	{
		form,
		translation,
	}) => {
	const {t} = useTranslation();

	return (
		<Form.Item shouldUpdate noStyle>
			{() => (
				form.isFieldsTouched() ?
					<Popconfirm
						okText={t("common.yes")}
						cancelText={t("common.no")}
						title={t(translation + ".create.form.cancelConfirm")}
						onConfirm={() => form.resetFields()}
						children={<Button type={"danger"} ghost icon={<DeleteItemIcon/>}>{t(translation + ".form.cancel.label")}</Button>}
					/> :
					<Button type={"danger"} disabled={!form.isFieldsTouched()} ghost icon={<DeleteItemIcon/>} onClick={() => form.resetFields()}>{t(translation + ".form.cancel.label")}</Button>
			)}
		</Form.Item>
	);
};

export default CancelCreateButton;
