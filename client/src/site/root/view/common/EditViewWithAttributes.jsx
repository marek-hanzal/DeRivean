import axios from "axios";
import PropTypes from "prop-types";
import {useContext, useEffect, useState} from "react";
import {useDispatch} from "react-redux";
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
	const dispatch = useDispatch();
	const [attributes, setAttributes] = useState([]);
	useEffect(() => {
		const cancelToken = axios.CancelToken.source();
		dispatch(currentContext.redux.redux.attributes.dispatch.attributes(cancelToken)).then(data => {
			setAttributes(data);
		});
		return () => cancelToken.cancel();
	}, [currentContext.redux.redux.attributes.dispatch, dispatch]);
	return (
		<CommonEditView param={param} context={context} defaultEnableSubmit={defaultEnableSubmit}>
			{children}
			<AttributeFieldEditor translation={currentContext.id} attributes={attributes}/>
		</CommonEditView>
	);
};

EditViewWithAttributes.propTypes = {
	param: PropTypes.string.isRequired,
	defaultEnableSubmit: PropTypes.any.isRequired,
};

export default EditViewWithAttributes;
