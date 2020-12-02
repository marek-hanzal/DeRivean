import {useModuleContext} from "@leight-core/leight";
import {DatePicker, Form} from "antd";
import {useContext} from "react";
import {useTranslation} from "react-i18next";
import EditorContext from "../../../../../../component/form/EditorContext";

const BuildInput = () => {
	const moduleContext = useModuleContext();
	const editorContext = useContext(EditorContext);
	const {t} = useTranslation();

	return (
		<Form.Item
			name={"build"}
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
