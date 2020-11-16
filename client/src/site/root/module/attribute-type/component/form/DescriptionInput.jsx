import {Form, Input} from "antd";
import EditorContext from "component/form/EditorContext";
import DescriptionIcon from "component/icon/DescriptionIcon";
import ModuleContext from "component/ModuleContext";
import {useContext} from "react";
import {useTranslation} from "react-i18next";
import validationFor from "utils/form/validationFor";

const DescriptionInput = () => {
	const moduleContext = useContext(ModuleContext);
	const editorContext = useContext(EditorContext);
	const {t} = useTranslation();

	return (
		<Form.Item
			{...validationFor("description", editorContext.errors, t)}
			name={"description"}
			style={{margin: 0}}
			children={
				<Input
					disabled={!editorContext.editor}
					bordered={false}
					style={{width: "100%"}}
					placeholder={t(`${moduleContext.id}.description.hint`)}
					suffix={<DescriptionIcon/>}
				/>
			}
		/>
	);
};

export default DescriptionInput;
