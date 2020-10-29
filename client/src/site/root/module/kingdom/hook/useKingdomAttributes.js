import {useEffect} from "react";
import {useDispatch} from "react-redux";
import KingdomAttributesRedux from "redux/kingdom/attributes/redux";

const useKingdomAttributes = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(KingdomAttributesRedux.fetch());
	}, [dispatch]);
};

export default useKingdomAttributes;
