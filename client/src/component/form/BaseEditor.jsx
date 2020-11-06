import {Form} from "antd";
import EditorContext from "component/form/EditorContext";
import EditorToolbar from "component/form/EditorToolbar";
import PropTypes from "prop-types";
import {useState} from "react";

const BaseEditor = (
	{
		name,
		translation,
		param,
		redux,
		initials,
		onFinish,
		onFinishFailed = () => null,
	}) => {
	const [errors, setErrors] = useState();
	const [editor, setEditor] = useState(false);
	const [enableSubmit, setEnableSubmit] = useState(false);
	const [form] = Form.useForm();
	return (
		<Form
			name={name}
			form={form}
			onFinish={onFinish}
			onFinishFailed={onFinishFailed}
		>
			<EditorContext.Provider value={{
				errors,
				setErrors,
				editor,
				setEditor,
				enableSubmit,
				setEnableSubmit,
				form,
				submit: <EditorToolbar form={form} initials={initials} param={param} redux={redux} translation={translation}/>,
			}}>
			</EditorContext.Provider>
		</Form>
	);
};

BaseEditor.propTypes = {
	name: PropTypes.string.isRequired,
	translation: PropTypes.string.isRequired,
	initials: PropTypes.any,
	param: PropTypes.string,
	redux: PropTypes.object,
	onFinish: PropTypes.func.isRequired,
	onFinishFailed: PropTypes.func,
};

export default BaseEditor;
