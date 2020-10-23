import validationStatus from "utils/form/validationStatus";

const validationFor = (field, error) => {
	if (error && error.validations && error.validations[field]) {
		return validationStatus(error.validations[field].status, error.validations[field].message);
	}
	return validationStatus();
};

export default validationFor;
