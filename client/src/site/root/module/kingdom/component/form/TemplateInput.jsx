import {Form} from "antd";
import EditorContext from "component/form/EditorContext";
import SearchInput from "component/form/SearchInput";
import {useContext} from "react";
import {useTranslation} from "react-i18next";
import KingdomContext from "site/root/module/kingdom/component/KingdomContext";
import validationFor from "utils/form/validationFor";

const TemplateInput = () => {
	const {t} = useTranslation();
	const editorContext = useContext(EditorContext);
	const kingdomContext = useContext(KingdomContext);
	return (
		<Form.Item
			{...validationFor("template", editorContext.errors, t)}
			name={"template"}
			help={t(`${kingdomContext.id}.create.form.template.help`)}
			children={
				<SearchInput placeholder={"create.form.template"} context={KingdomContext}/>
			}
		/>
	);
};

export default TemplateInput;
