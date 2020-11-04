import EditorContext from "component/form/EditorContext";
import PropTypes from "prop-types";
import {useContext, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import AttributeFieldEditor from "site/root/component/AttributeFieldEditor";
import CommonEditView from "site/root/view/common/CommonEditView";

const EditViewWithAttributes = (
	{
		context,
		param,
		enableSubmit,
		children,
	}) => {
	const currentContext = useContext(context);
	const dispatch = useDispatch();
	const attributes = useSelector(currentContext.redux.redux.attributes.selector.getPayload);

	/**
	 * Fetch attributes from redux.
	 */
	useEffect(() => {
		dispatch(currentContext.redux.redux.attributes.dispatch.attributes());
	}, [dispatch, currentContext.redux.redux.attributes.dispatch]);

	return (
		<CommonEditView param={param} context={context} enableSubmit={enableSubmit}>
			<EditorContext.Consumer>
				{({editor}) => (
					<>
						{children}
						<AttributeFieldEditor edit={editor} translation={context.id} attributes={attributes}/>
					</>
				)}
			</EditorContext.Consumer>
		</CommonEditView>
	);
};

EditViewWithAttributes.propTypes = {
	param: PropTypes.string.isRequired,
	enableSubmit: PropTypes.any.isRequired,
};

export default EditViewWithAttributes;
