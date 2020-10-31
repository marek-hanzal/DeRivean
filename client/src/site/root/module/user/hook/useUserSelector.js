import {useSelector} from "react-redux";
import UserRedux from "redux/user/redux";

const useUserSelector = () => useSelector(UserRedux.redux.fetch.selector.getPayload);

export default useUserSelector;
