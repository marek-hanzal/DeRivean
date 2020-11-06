import {Form} from "antd";
import EditorContext from "component/form/EditorContext";
import EditorToolbar from "component/form/EditorToolbar";
import PropTypes from "prop-types";
import {useState} from "react";

const BaseEditor = (
	{
		name,
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
	const [enableSubmit, setEnableSubmit] = useState(defaultEnableSubmit);
	const [form] = Form.useForm();
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
	translation: PropTypes.string.isRequired,
	param: PropTypes.string,
	redux: PropTypes.object,
	onFinish: PropTypes.func.isRequired,
	onFinishFailed: PropTypes.func,
};

export default BaseEditor;
