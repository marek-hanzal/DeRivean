import {Button, Form, Popconfirm} from "antd";
import DeleteItemIcon from "component/icon/DeleteItemIcon";
import {useTranslation} from "react-i18next";
import values from "utils/form/values";

const CancelEditButton = (
	{
		form,
		initials,
		setEdit,
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
						title={t(translation + ".edit.form.cancelConfirm")}
						onConfirm={() => {
							setEdit(false);
							values(form, initials);
						}}
						children={<Button type={"danger"} ghost icon={<DeleteItemIcon/>}>{t(translation + ".form.cancel")}</Button>}
					/> :
					<Button type={"danger"} ghost icon={<DeleteItemIcon/>} onClick={() => {
						setEdit(false);
						values(form, initials);
					}}>{t(translation + ".form.cancel")}</Button>
			)}
		</Form.Item>
	);
};

export default CancelEditButton;
