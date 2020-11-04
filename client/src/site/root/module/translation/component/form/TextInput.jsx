import {Form, Input} from "antd";
import EditorContext from "component/form/EditorContext";
import {useContext} from "react";
import {useTranslation} from "react-i18next";
import TranslationContext from "site/root/module/translation/component/TranslationContext";
import validationFor from "utils/form/validationFor";

const TextInput = () => {
	const translationContext = useContext(TranslationContext);
	const editorContext = useContext(EditorContext);
	const {t} = useTranslation();
	return (
		<Form.Item
			{...validationFor("text", editorContext.errors, t)}
			name={"text"}
			rules={[
				{
					required: true,
					message: t(`${translationContext.id}.form.text.required`),
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
