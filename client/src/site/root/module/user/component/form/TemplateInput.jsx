import {Form} from "antd";
import EditorContext from "component/form/EditorContext";
import SearchInput from "component/form/SearchInput";
import ModuleContext from "component/ModuleContext";
import {useContext} from "react";
import {useTranslation} from "react-i18next";
import validationFor from "utils/form/validationFor";

const TemplateInput = () => {
	const {t} = useTranslation();
	const moduleContext = useContext(ModuleContext);
	const editorContext = useContext(EditorContext);
	return (
		<Form.Item
			{...validationFor("template", editorContext.errors, t)}
			name={"template"}
			help={t(`${moduleContext.id}.form.template.help`)}
			children={
				<SearchInput placeholder={"form.template"}/>
			}
		/>
	);
};

export default TemplateInput;
