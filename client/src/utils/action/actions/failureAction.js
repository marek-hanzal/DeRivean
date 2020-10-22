import {createAction} from "redux-actions";

const failureAction = name => createAction(`ON_${name.replace(/[-.]/, "_").toUpperCase()}_FAILURE`, error => ({status: "FAILURE", loading: false, payload: null, error,}));

export default failureAction;
