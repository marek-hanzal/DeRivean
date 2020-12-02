import {useModuleContext} from "@leight-core/leight";
import {Form} from "antd";
import SearchInput from "component/form/SearchInput";
import {useTranslation} from "react-i18next";

const TemplateInput = () => {
	const {t} = useTranslation();
	const moduleContext = useModuleContext();
	return (
		<Form.Item
			name={"template"}
			help={t(`${moduleContext.id}.create.form.template.help`)}
			children={
				<SearchInput placeholder={"create.form.template"}/>
			}
		/>
	);
};

export default TemplateInput;
