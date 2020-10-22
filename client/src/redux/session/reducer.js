import {onSessionClose, onSessionOpen} from "redux/session/action";
import reducerSimpleActions from "utils/action/reducerSimpleActions";

export default reducerSimpleActions([onSessionOpen, onSessionClose], {user: {site: "public",},});
