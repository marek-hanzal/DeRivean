import validationStatus from "utils/form/validationStatus";

const validationStatusFor = (...fields) => fields.reduce((map, field) => ({...map, [field]: validationStatus()}), {});

export default validationStatusFor;
