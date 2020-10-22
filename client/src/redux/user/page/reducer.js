import reducerActions from "utils/action/reducerActions";
import defaultPage from "utils/page";
import {onUserPageFailure, onUserPageRequest, onUserPageSuccess} from "./action";

export default reducerActions([onUserPageRequest, onUserPageSuccess, onUserPageFailure], defaultPage);
