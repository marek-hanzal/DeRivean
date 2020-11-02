import {Divider, Space} from "antd";
import CancelCreateButton from "component/form/CancelCreateButton";
import SubmitButton from "component/form/SubmitButton";
import PropTypes from "prop-types";

const CreateSubmitButtons = (
	{
		form,
		translation,
		enableSubmit,
		onCancel = () => ({}),
	}) => {
	return (
		<Space split={<Divider type={"vertical"}/>}>
			<SubmitButton enable={enableSubmit} form={form} title={translation + ".create.form.submit"}/>
			<CancelCreateButton onCancel={onCancel} form={form} translation={translation}/>
		</Space>
	);
};

CreateSubmitButtons.propTypes = {
	form: PropTypes.any.isRequired,
	translation: PropTypes.string.isRequired,
	enableSubmit: PropTypes.any,
};

export default CreateSubmitButtons;
