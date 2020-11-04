import {Form, Input} from "antd";
import EditorContext from "component/form/EditorContext";
import {useContext} from "react";
import {useTranslation} from "react-i18next";
import TranslationContext from "site/root/module/translation/component/TranslationContext";
import validationFor from "utils/form/validationFor";

const LanguageInput = () => {
	const translationContext = useContext(TranslationContext);
	const editorContext = useContext(EditorContext);
	const {t} = useTranslation();
	return (
		<Form.Item
			{...validationFor("language", editorContext.errors, t)}
			name={"language"}
			rules={[
				{
					required: true,
					message: t(`${translationContext.id}.form.language.required`),
				}
			]}
			children={<Input disabled={!editorContext.editor} addonBefore={<div style={{width: "120px"}}>{t(`${translationContext.id}.form.language.label`)}</div>}/>}
		/>
	);
};

export default LanguageInput;
