import {Form} from "antd";
import EditorContext from "component/form/EditorContext";
import SearchInput from "component/form/SearchInput";
import ModuleContext from "component/ModuleContext";
import {useContext} from "react";
import {useTranslation} from "react-i18next";
import validationFor from "utils/form/validationFor";

const TemplateInput = () => {
	const {t} = useTranslation();
	const editorContext = useContext(EditorContext);
	const moduleContext = useContext(ModuleContext);
	return (
		<Form.Item
			{...validationFor("template", editorContext.errors, t)}
			name={"template"}
			help={t(`${moduleContext.id}.create.form.template.help`)}
			children={
				<SearchInput placeholder={"create.form.template"}/>
			}
		/>
	);
};

export default TemplateInput;
