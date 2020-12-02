import {useModuleContext} from "@leight-core/leight";
import {Form} from "antd";
import {useTranslation} from "react-i18next";
import SearchInput from "../../../../../../component/form/SearchInput";

const TemplateInput = () => {
	const {t} = useTranslation();
	const moduleContext = useModuleContext();
	return (
		<Form.Item
			name={"template"}
			help={t(`${moduleContext.id}.form.template.help`)}
			children={
				<SearchInput placeholder={"form.template"}/>
			}
		/>
	);
};

export default TemplateInput;
