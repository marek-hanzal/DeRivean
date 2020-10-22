import {createAction} from "redux-actions";

const requestAction = (name, defaultPayload = null) => createAction(`ON_${name.replace(/[-.]/, "_").toUpperCase()}_REQUEST`, (payload = defaultPayload) => ({status: "REQUEST", loading: true, error: null, payload,}));

export default requestAction;
