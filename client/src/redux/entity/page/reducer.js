import reducerActions from "utils/action/reducerActions";
import defaultPage from "utils/page";
import {onEntityPageFailure, onEntityPageRequest, onEntityPageSuccess} from "./action";

export default reducerActions([onEntityPageRequest, onEntityPageSuccess, onEntityPageFailure], defaultPage);
