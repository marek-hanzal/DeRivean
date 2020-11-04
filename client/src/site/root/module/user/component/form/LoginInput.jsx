import {Form, Input} from "antd";
import EditorContext from "component/form/EditorContext";
import {useContext} from "react";
import {useTranslation} from "react-i18next";
import UserContext from "site/root/module/user/component/UserContext";
import validationFor from "utils/form/validationFor";

const LoginInput = () => {
	const {t} = useTranslation();
	const userContext = useContext(UserContext);
	const editorContext = useContext(EditorContext);
	return (
		<Form.Item
			{...validationFor("login", editorContext.errors, t)}
			name={"login"}
			rules={[
				{
					required: true,
					message: t(`${userContext.id}.form.login.required`),
				}
			]}
			children={<Input disabled={!editorContext.editor} addonBefore={<div style={{width: "120px"}}>{t(`${userContext.id}.form.login.label`)}</div>}/>}
		/>
	);
};

export default LoginInput;
