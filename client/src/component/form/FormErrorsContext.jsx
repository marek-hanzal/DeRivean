import React from "react";

const FormErrorsContext = React.createContext({
	errors: null,
	setErrors: () => ({}),
});

export default FormErrorsContext;
