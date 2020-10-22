import {createAction} from "redux-actions";

const dismissAction = (name, payload = null) => createAction(`ON_${name.replace(/[-.]/, "_").toUpperCase()}_DISMISS`, () => ({status: null, loading: false, payload, error: null,}));

export default dismissAction;
