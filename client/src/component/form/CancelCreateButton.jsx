import {Button, Form, Popconfirm} from "antd";
import EditorContext from "component/form/EditorContext";
import CancelIcon from "component/icon/CancelIcon";
import {useContext} from "react";
import {useTranslation} from "react-i18next";

const CancelCreateButton = (
	{
		form,
		translation,
	}) => {
	const {t} = useTranslation();
	const editor = useContext(EditorContext);
	return (
		<Form.Item shouldUpdate noStyle>
			{() => (
				form.isFieldsTouched() ?
					<Popconfirm
						okText={t("common.yes")}
						cancelText={t("common.no")}
						title={t(translation + ".create.form.cancelConfirm")}
						onConfirm={() => {
							form.resetFields();
							editor.setErrors(null);
						}}
						children={<Button type={"dashed"} danger ghost icon={<CancelIcon/>}>{t(translation + ".form.cancel")}</Button>}
					/> :
					<Button type={"dashed"} danger disabled={!form.isFieldsTouched()} ghost icon={<CancelIcon/>} onClick={() => {
						form.resetFields();
						editor.setErrors(null);
					}}>{t(translation + ".form.cancel")}</Button>
			)}
		</Form.Item>
	);
};

export default CancelCreateButton;
