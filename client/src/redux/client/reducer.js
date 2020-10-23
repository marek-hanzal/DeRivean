import reducerActions from "utils/action/reducerActions";
import {onClientFailure, onClientRequest, onClientSuccess} from "./action";

export default reducerActions([onClientRequest, onClientFailure, onClientSuccess]);
