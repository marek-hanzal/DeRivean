import {Form} from "antd";
import EditorContext from "component/form/EditorContext";
import EditorToolbar from "component/form/EditorToolbar";
import PropTypes from "prop-types";
import {useState} from "react";

const BaseEditor = (
	{
		name,
		readyCount,
		enableEditor = false,
		defaultEnableSubmit,
		translation,
		param,
		redux,
		onFinish,
		onFinishFailed = () => null,
		children,
	}) => {
	const [errors, setErrors] = useState();
	const [initials, setInitials] = useState();
	const [editor, setEditor] = useState(enableEditor);
	const [ready, setReady] = useState(readyCount || 0);
	const [enableSubmit, setEnableSubmit] = useState(defaultEnableSubmit);
	const [form] = Form.useForm();
	const isReady = () => setReady(prev => prev - 1);
	console.log("ready", ready);
	return (
		<Form
			name={name}
			form={form}
			onFinish={values => onFinish(values, initials, {setErrors, setInitials, setEditor, setEnableSubmit, form})}
			onFinishFailed={onFinishFailed}
			children={
				<EditorContext.Provider
					value={{
						errors,
						setErrors,
						editor,
						setEditor,
						enableSubmit,
						setEnableSubmit,
						initials,
						setInitials,
						ready,
						isReady,
						form,
						submit: () => <EditorToolbar param={param} redux={redux} translation={translation}/>,
					}}
					children={children}
				/>
			}
		/>
	);
};

BaseEditor.propTypes = {
	name: PropTypes.string.isRequired,
	readyCount: PropTypes.number,
	translation: PropTypes.string.isRequired,
	param: PropTypes.string,
	redux: PropTypes.object,
	onFinish: PropTypes.func.isRequired,
	onFinishFailed: PropTypes.func,
};

export default BaseEditor;
