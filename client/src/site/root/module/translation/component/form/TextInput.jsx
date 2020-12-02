import {useModuleContext} from "@leight-core/leight";
import {Form, Input} from "antd";
import {useContext} from "react";
import {useTranslation} from "react-i18next";
import EditorContext from "../../../../../../component/form/EditorContext";

const TextInput = () => {
	const moduleContext = useModuleContext();
	const editorContext = useContext(EditorContext);
	const {t} = useTranslation();
	return (
		<Form.Item
			name={"text"}
			rules={[
				{
					required: true,
					message: t(`${moduleContext.id}.form.text.required`),
				}
			]}
			children={<Input.TextArea
				allowClear
				autoSize={{minRows: 6, maxRows: 6}}
				disabled={!editorContext.editor}
			/>}
		/>
	);
};

export default TextInput;
