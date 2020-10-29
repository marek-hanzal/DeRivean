import {useSelector} from "react-redux";
import UserFetchRedux from "redux/user/fetch/redux";

const useUserSelector = () => useSelector(UserFetchRedux.selector.getPayload);

export default useUserSelector;
