import {Form} from "antd";
import EditorContext from "component/form/EditorContext";
import SearchInput from "component/form/SearchInput";
import {useContext} from "react";
import {useTranslation} from "react-i18next";
import UserContext from "site/root/module/user/component/UserContext";
import validationFor from "utils/form/validationFor";

const TemplateInput = () => {
	const {t} = useTranslation();
	const userContext = useContext(UserContext);
	const editorContext = useContext(EditorContext);
	return (
		<Form.Item
			{...validationFor("template", editorContext.errors, t)}
			name={"template"}
			help={t(`${userContext.id}.form.template.help`)}
			children={
				<SearchInput placeholder={"form.template"} context={UserContext}/>
			}
		/>
	);
};

export default TemplateInput;
