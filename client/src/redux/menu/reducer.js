import {onMenuCollapse, onMenuOpen} from "redux/menu/action";
import reducerSimpleActions from "utils/action/reducerSimpleActions";

export default reducerSimpleActions([onMenuCollapse, onMenuOpen], {open: [], collapse: false});
