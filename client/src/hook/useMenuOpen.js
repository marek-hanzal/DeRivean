import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {onMenuOpen} from "redux/menu/action";

const useMenuOpen = open => {
	const dispatch = useDispatch();
	useEffect(() => {
		if (open) {
			dispatch(onMenuOpen([open]));
		}
	}, [dispatch, open]);
};

export default useMenuOpen;
