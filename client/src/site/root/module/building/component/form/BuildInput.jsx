import {DatePicker, Form} from "antd";
import EditorContext from "component/form/EditorContext";
import ModuleContext from "component/ModuleContext";
import {useContext} from "react";
import {useTranslation} from "react-i18next";
import validationFor from "utils/form/validationFor";

const BuildInput = () => {
	const moduleContext = useContext(ModuleContext);
	const editorContext = useContext(EditorContext);
	const {t} = useTranslation();

	return (
		<Form.Item
			{...validationFor("built", editorContext.errors, t)}
			name={"built"}
			style={{margin: 0}}
			children={
				<DatePicker
					showTime
					disabled={!editorContext.editor}
					placeholder={t(`${moduleContext.id}.build.hint`)}
					bordered={false}
					style={{width: "100%"}}
				/>
			}
		/>
	);
};

export default BuildInput;
