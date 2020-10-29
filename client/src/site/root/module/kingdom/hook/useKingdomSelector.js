import {useSelector} from "react-redux";
import KingdomFetchRedux from "redux/kingdom/fetch/redux";

const useKingdomSelector = () => useSelector(KingdomFetchRedux.selector.getPayload);

export default useKingdomSelector;
