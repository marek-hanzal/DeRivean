import {DatePicker, Form} from "antd";
import EditorContext from "component/form/EditorContext";
import ModuleContext from "component/ModuleContext";
import {useContext} from "react";
import {useTranslation} from "react-i18next";
import validationFor from "utils/form/validationFor";

const BuiltInput = () => {
	const moduleContext = useContext(ModuleContext);
	const editorContext = useContext(EditorContext);
	const {t} = useTranslation();

	return (
		<Form.Item
			{...validationFor("built", editorContext.errors, t)}
			name={"built"}
			rules={[
				{
					required: true,
					message: t(`${moduleContext.id}.form.built.required`),
				}
			]}
			label={t("root.building.built.label")}
			children={
				<DatePicker
					showTime
					disabled={!editorContext.editor}
					placeholder={t("root.building.built.hint")}
				/>
			}
		/>
	);
};

export default BuiltInput;
