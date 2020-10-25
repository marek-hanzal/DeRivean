import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {onMenuSelect} from "redux/menu/action";

const useSelectMenu = (menu) => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(onMenuSelect(menu));
	}, [dispatch, menu]);
};

export default useSelectMenu;
