import {Button, Form, Popconfirm} from "antd";
import EditorContext from "component/form/EditorContext";
import CancelIcon from "component/icon/CancelIcon";
import {useContext} from "react";
import {useTranslation} from "react-i18next";
import values from "utils/form/values";

const CancelEditButton = (
	{
		form,
		initials,
		translation,
	}) => {
	const {t} = useTranslation();
	const editor = useContext(EditorContext);
	if (!editor) {
		throw new Error("Missing Editor Context!");
	}

	return (
		<Form.Item shouldUpdate noStyle>
			{() => (
				form.isFieldsTouched() ?
					<Popconfirm
						okText={t("common.yes")}
						cancelText={t("common.no")}
						title={t(translation + ".edit.form.cancelConfirm")}
						onConfirm={() => {
							editor.setEditor(false);
							values(form, initials);
							editor.setErrors(null);
						}}
						children={<Button type={"dashed"} danger ghost icon={<CancelIcon/>}>{t(translation + ".form.cancel")}</Button>}
					/> :
					<Button type={"dashed"} danger ghost icon={<CancelIcon/>} onClick={() => {
						editor.setEditor(false);
						values(form, initials);
						editor.setErrors(null);
					}}>{t(translation + ".form.cancel")}</Button>
			)}
		</Form.Item>
	);
};

export default CancelEditButton;
