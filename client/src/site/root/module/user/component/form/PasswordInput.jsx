import {LockOutlined} from "@ant-design/icons";
import {Form, Input} from "antd";
import EditorContext from "component/form/EditorContext";
import {useContext} from "react";
import {useTranslation} from "react-i18next";
import UserContext from "site/root/module/user/component/UserContext";
import validationFor from "utils/form/validationFor";

const PasswordInput = () => {
	const {t} = useTranslation();
	const userContext = useContext(UserContext);
	const editorContext = useContext(EditorContext);
	return (
		<Form.Item
			{...validationFor("password", editorContext.errors, t)}
			name={"password"}
			children={<Input.Password addonBefore={<div style={{width: "120px"}}>{t(`${userContext.id}.form.password.label`)}</div>} suffix={<LockOutlined/>}/>}
		/>
	);
};

export default PasswordInput;
