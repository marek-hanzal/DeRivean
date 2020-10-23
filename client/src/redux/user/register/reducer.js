import {
	onUserRegisterDismiss,
	onUserRegisterFailure,
	onUserRegisterRequest,
	onUserRegisterSuccess
} from "redux/user/register/action";
import reducerActions from "utils/action/reducerActions";

export default reducerActions([onUserRegisterRequest, onUserRegisterSuccess, onUserRegisterFailure, onUserRegisterDismiss]);
