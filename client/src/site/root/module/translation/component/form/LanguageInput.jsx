import {Form, Input} from "antd";
import EditorContext from "component/form/EditorContext";
import ModuleContext from "component/ModuleContext";
import {useContext} from "react";
import {useTranslation} from "react-i18next";

const LanguageInput = () => {
	const moduleContext = useContext(ModuleContext);
	const editorContext = useContext(EditorContext);
	const {t} = useTranslation();
	return (
		<Form.Item
			name={"language"}
			rules={[
				{
					required: true,
					message: t(`${moduleContext.id}.form.language.required`),
				}
			]}
			children={<Input disabled={!editorContext.editor} addonBefore={<div style={{width: "120px"}}>{t(`${moduleContext.id}.form.language.label`)}</div>}/>}
		/>
	);
};

export default LanguageInput;
