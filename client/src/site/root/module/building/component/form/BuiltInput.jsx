import {DatePicker, Form} from "antd";
import EditorContext from "component/form/EditorContext";
import ModuleContext from "component/ModuleContext";
import {useContext} from "react";
import {useTranslation} from "react-i18next";
import validationFor from "utils/form/validationFor";

const BuiltInput = () => {
	const moduleContext = useContext(ModuleContext);
	const editorContext = useContext(EditorContext);
	const {t} = useTranslation();

	return (
		<Form.Item
			{...validationFor("built", editorContext.errors, t)}
			name={"built"}
			label={t(`${moduleContext.id}.built.label`)}
			children={
				<DatePicker
					showTime
					disabled={!editorContext.editor}
					placeholder={t(`${moduleContext.id}.built.hint`)}
				/>
			}
		/>
	);
};

export default BuiltInput;
