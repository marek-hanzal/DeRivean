import isArray from "isarray";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {MenuRedux} from "redux/menu/redux";

const useMenuOpen = open => {
	const dispatch = useDispatch();
	useEffect(() => {
		if (open) {
			dispatch(MenuRedux.open(isArray(open) ? open : [open]));
		}
	}, [dispatch, open]);
};

export default useMenuOpen;
