import {LockOutlined} from "@ant-design/icons";
import {Form, Input} from "antd";
import EditorContext from "component/form/EditorContext";
import ModuleContext from "component/ModuleContext";
import {useContext} from "react";
import {useTranslation} from "react-i18next";
import validationFor from "utils/form/validationFor";

const PasswordInput = () => {
	const {t} = useTranslation();
	const moduleContext = useContext(ModuleContext);
	const editorContext = useContext(EditorContext);
	return (
		<Form.Item
			{...validationFor("password", editorContext.errors, t)}
			name={"password"}
			children={<Input.Password disabled={!editorContext.editor} addonBefore={<div style={{width: "120px"}}>{t(`${moduleContext.id}.form.password.label`)}</div>} suffix={<LockOutlined/>}/>}
		/>
	);
};

export default PasswordInput;
