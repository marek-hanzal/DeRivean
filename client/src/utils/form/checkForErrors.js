const checkForErrors = (form) => {
	return form.getFieldsError().filter(({errors}) => errors.length).length;
};

export default checkForErrors;
