import {Form} from "antd";
import EditorContext from "component/form/EditorContext";
import PropTypes from "prop-types";
import {useEffect, useState} from "react";

const BaseEditor = (
	{
		name,
		defaultInitials,
		readyCount,
		enableEditor = false,
		defaultEnableSubmit,
		onFinish,
		onFinishFailed = () => null,
		inputMapper = values => values,
		outputMapper = values => values,
		children,
	}) => {
	const [errors, setErrors] = useState();
	const [initials, setInitials] = useState(defaultInitials);
	const [editor, setEditor] = useState(enableEditor);
	const [ready, setReady] = useState(readyCount || 0);
	const [enableSubmit, setEnableSubmit] = useState(defaultEnableSubmit);
	const [form] = Form.useForm();
	const isReady = () => setReady(prev => Math.max(0, prev - 1));
	useEffect(() => {
		form.setFieldsValue(inputMapper(defaultInitials));
		// eslint-disable-next-line
	}, []);
	return (
		<Form
			name={name}
			form={form}
			onFinish={values => onFinish(outputMapper(values), initials, {setErrors, setInitials, setEditor, setEnableSubmit, form})}
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
						inputMapper,
						outputMapper,
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
