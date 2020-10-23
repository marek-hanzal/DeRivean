import {
	onUserLoginDismiss,
	onUserLoginFailure,
	onUserLoginRequest,
	onUserLoginSuccess
} from "redux/user/login/action";
import reducerActions from "utils/action/reducerActions";

export default reducerActions([onUserLoginRequest, onUserLoginSuccess, onUserLoginFailure, onUserLoginDismiss]);
