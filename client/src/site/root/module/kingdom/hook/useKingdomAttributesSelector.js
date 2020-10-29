import {useSelector} from "react-redux";
import KingdomAttributesRedux from "redux/kingdom/attributes/redux";

const useKingdomAttributesSelector = () => useSelector(KingdomAttributesRedux.selector.getPayload);

export default useKingdomAttributesSelector;
