const setValues = (form, data) => {
	form.setFieldsValue(data);
	form.setFields(Object.keys(data).map(key => ({name: key, touched: false})));
};

export default setValues;
