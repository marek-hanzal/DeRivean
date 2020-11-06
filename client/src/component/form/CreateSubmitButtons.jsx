import {Divider, Space} from "antd";
import CancelCreateButton from "component/form/CancelCreateButton";
import SubmitButton from "component/form/SubmitButton";
import PropTypes from "prop-types";

const CreateSubmitButtons = (
	{
		translation,
	}) => {
	return (
		<Space split={<Divider type={"vertical"}/>}>
			<SubmitButton title={translation + ".create.form.submit"}/>
			<CancelCreateButton translation={translation}/>
		</Space>
	);
};

CreateSubmitButtons.propTypes = {
	translation: PropTypes.string.isRequired,
};

export default CreateSubmitButtons;
