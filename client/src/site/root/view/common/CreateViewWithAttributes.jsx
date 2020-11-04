import PropTypes from "prop-types";
import {useContext, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import AttributeFieldEditor from "site/root/component/AttributeFieldEditor";
import CommonCreateView from "site/root/view/common/CommonCreateView";

const CreateViewWithAttributes = (
	{
		context,
		param,
		children,
		enableSubmit,
	}) => {
	const currentContext = useContext(context);
	const dispatch = useDispatch();
	const attributes = useSelector(currentContext.redux.redux.attributes.selector.getPayload);

	/**
	 * Fetch attributes used in editor.
	 */
	useEffect(() => {
		dispatch(currentContext.redux.redux.attributes.dispatch.attributes());
	}, [dispatch, currentContext.redux.redux.attributes.dispatch]);

	return (
		<CommonCreateView param={param} context={context} enableSubmit={enableSubmit}>
			{children}
			<AttributeFieldEditor edit={true} translation={currentContext.id} attributes={attributes}/>
		</CommonCreateView>
	);
};

CreateViewWithAttributes.propTypes = {
	param: PropTypes.string.isRequired,
	enableSubmit: PropTypes.any,
};

export default CreateViewWithAttributes;
