import {useSelector} from "react-redux";
import KingdomRedux from "redux/kingdom/redux";

const useKingdomSelector = () => useSelector(KingdomRedux.redux.fetch.selector.getPayload);

export default useKingdomSelector;
