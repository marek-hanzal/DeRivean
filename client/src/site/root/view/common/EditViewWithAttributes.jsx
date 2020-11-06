import PropTypes from "prop-types";
import {useContext} from "react";
import AttributeFieldEditor from "site/root/component/AttributeFieldEditor";
import CommonEditView from "site/root/view/common/CommonEditView";

const EditViewWithAttributes = (
	{
		context,
		param,
		defaultEnableSubmit,
		children,
	}) => {
	const currentContext = useContext(context);
	return (
		<CommonEditView param={param} context={context} defaultEnableSubmit={defaultEnableSubmit}>
			{children}
			<AttributeFieldEditor translation={currentContext.id} redux={currentContext.redux}/>
		</CommonEditView>
	);
};

EditViewWithAttributes.propTypes = {
	param: PropTypes.string.isRequired,
	defaultEnableSubmit: PropTypes.any.isRequired,
};

export default EditViewWithAttributes;
