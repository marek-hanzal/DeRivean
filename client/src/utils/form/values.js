import isArray from "isarray";
import isObject from "isobject";

const magic = (form, fields, name = []) => {
	let keys = [];
	for (const [key, value] of Object.entries(fields)) {
		const current = [].concat(name, [key]);
		if (isArray(value)) {
			keys = keys.concat([current]);
			for (let i = 0; i < value.length; i++) {
				keys = keys.concat(magic(form, value[i], [].concat(current, [i])));
			}
		} else if (isObject(value)) {
			keys = keys.concat(magic(form, value, current));
		} else {
			keys = keys.concat([current]);
		}
	}
	return keys;
};

const values = (form, data) => {
	form.setFieldsValue(data);
	form.setFields(magic(form, data).map(name => ({name, touched: false})));
};

export default values;
