import reducerActions from "utils/action/reducerActions";
import {onDiscoveryFailure, onDiscoveryRequest, onDiscoverySuccess} from "./action";

export default reducerActions([onDiscoveryRequest, onDiscoverySuccess, onDiscoveryFailure]);
