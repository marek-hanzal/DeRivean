import {useEffect} from "react";
import {useDispatch} from "react-redux";
import MenuRedux from "redux/menu/redux";

const useMenuSelect = select => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(MenuRedux.select([select]));
	}, [dispatch, select]);
};

export default useMenuSelect;
