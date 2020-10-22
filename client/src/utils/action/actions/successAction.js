import {createAction} from "redux-actions";

const successAction = name => createAction(`ON_${name.replace(/[-.]/, "_").toUpperCase()}_SUCCESS`, payload => ({status: "SUCCESS", loading: false, error: null, payload,}));

export default successAction;
