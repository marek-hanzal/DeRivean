import {Form, Input} from "antd";
import EditorContext from "component/form/EditorContext";
import ModuleContext from "component/ModuleContext";
import {useContext} from "react";
import {useTranslation} from "react-i18next";
import validationFor from "utils/form/validationFor";

const TextInput = () => {
	const moduleContext = useContext(ModuleContext);
	const editorContext = useContext(EditorContext);
	const {t} = useTranslation();
	return (
		<Form.Item
			{...validationFor("text", editorContext.errors, t)}
			name={"text"}
			rules={[
				{
					required: true,
					message: t(`${moduleContext.id}.form.text.required`),
				}
			]}
			children={<Input.TextArea
				allowClear
				autoSize={{minRows: 6, maxRows: 6}}
				disabled={!editorContext.editor}
			/>}
		/>
	);
};

export default TextInput;
