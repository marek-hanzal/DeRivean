import PropTypes from "prop-types";
import {useContext} from "react";
import AttributeFieldEditor from "site/root/component/AttributeFieldEditor";
import CommonCreateView from "site/root/view/common/CommonCreateView";

const CreateViewWithAttributes = (
	{
		context,
		param,
		children,
		defaultEnableSubmit,
	}) => {
	const currentContext = useContext(context);
	return (
		<CommonCreateView param={param} context={context} defaultEnableSubmit={defaultEnableSubmit}>
			{children(<AttributeFieldEditor translation={currentContext.id} redux={currentContext.redux}/>)}
		</CommonCreateView>
	);
};

CreateViewWithAttributes.propTypes = {
	param: PropTypes.string.isRequired,
	children: PropTypes.func.isRequired,
	defaultEnableSubmit: PropTypes.any,
};

export default CreateViewWithAttributes;
