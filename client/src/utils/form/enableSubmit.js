import checkForErrors from "utils/form/checkForErrors";

const enableSubmit = (form, fields) => {
	return form.isFieldsTouched(fields) && !checkForErrors(form);
};

export default enableSubmit;
