import {Form, Input} from "antd";
import EditorContext from "component/form/EditorContext";
import ModuleContext from "component/ModuleContext";
import {useContext} from "react";
import {useTranslation} from "react-i18next";

const LoginInput = () => {
	const {t} = useTranslation();
	const moduleContext = useContext(ModuleContext);
	const editorContext = useContext(EditorContext);
	return (
		<Form.Item
			name={"login"}
			rules={[
				{
					required: true,
					message: t(`${moduleContext.id}.form.login.required`),
				}
			]}
			children={<Input disabled={!editorContext.editor} addonBefore={<div style={{width: "120px"}}>{t(`${moduleContext.id}.form.login.label`)}</div>}/>}
		/>
	);
};

export default LoginInput;
