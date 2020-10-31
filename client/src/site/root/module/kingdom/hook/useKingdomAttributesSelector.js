import {useSelector} from "react-redux";
import KingdomRedux from "redux/kingdom/redux";

const useKingdomAttributesSelector = () => useSelector(KingdomRedux.redux.attributes.selector.getPayload);

export default useKingdomAttributesSelector;
