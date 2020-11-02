import {Button, Form, Popconfirm} from "antd";
import CancelIcon from "component/icon/CancelIcon";
import {useTranslation} from "react-i18next";

const CancelCreateButton = (
	{
		form,
		translation,
		onCancel = () => ({}),
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
						onConfirm={() => {
							form.resetFields();
							onCancel();
						}}
						children={<Button type={"dashed"} danger ghost icon={<CancelIcon/>}>{t(translation + ".form.cancel")}</Button>}
					/> :
					<Button type={"dashed"} danger disabled={!form.isFieldsTouched()} ghost icon={<CancelIcon/>} onClick={() => {
						form.resetFields();
						onCancel();
					}}>{t(translation + ".form.cancel")}</Button>
			)}
		</Form.Item>
	);
};

export default CancelCreateButton;
