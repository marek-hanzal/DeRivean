import validationStatus from "utils/form/validationStatus";

const validationFor = (field, error, t) => {
	if (error && error.validations && error.validations[field]) {
		return validationStatus(error.validations[field].status, t(error.validations[field].message));
	}
	return validationStatus();
};

export default validationFor;
