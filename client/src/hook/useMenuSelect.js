import {useEffect} from "react";
import {useDispatch} from "react-redux";
import MenuRedux from "redux/menu/redux";

const useMenuSelect = select => {
	const dispatch = useDispatch();
	useEffect(() => {
		setTimeout(() => dispatch(MenuRedux.select([select])), 0);
	}, [dispatch, select]);
};

export default useMenuSelect;
