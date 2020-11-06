import {Button, Form, Popconfirm} from "antd";
import EditorContext from "component/form/EditorContext";
import CancelIcon from "component/icon/CancelIcon";
import {useContext} from "react";
import {useTranslation} from "react-i18next";

const CancelCreateButton = (
	{
		translation,
	}) => {
	const {t} = useTranslation();
	const editorContext = useContext(EditorContext);
	return (
		<Form.Item shouldUpdate noStyle>
			{() => (
				editorContext.form.isFieldsTouched() ?
					<Popconfirm
						okText={t("common.yes")}
						cancelText={t("common.no")}
						title={t(translation + ".create.form.cancelConfirm")}
						onConfirm={() => {
							editorContext.form.resetFields();
							editorContext.setErrors(null);
						}}
						children={<Button type={"dashed"} danger ghost icon={<CancelIcon/>}>{t(translation + ".form.cancel")}</Button>}
					/> :
					<Button type={"dashed"} danger disabled={!editorContext.form.isFieldsTouched()} ghost icon={<CancelIcon/>} onClick={() => {
						editorContext.form.resetFields();
						editorContext.setErrors(null);
					}}>{t(translation + ".form.cancel")}</Button>
			)}
		</Form.Item>
	);
};

export default CancelCreateButton;
