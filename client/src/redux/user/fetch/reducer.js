import {onUserFetchFailure, onUserFetchRequest, onUserFetchSuccess} from "redux/user/fetch/action";
import reducerActions from "utils/action/reducerActions";

export default reducerActions([onUserFetchRequest, onUserFetchSuccess, onUserFetchFailure]);
