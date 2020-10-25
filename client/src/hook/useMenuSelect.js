import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {onMenuSelect} from "redux/menu/action";

const useMenuSelect = select => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(onMenuSelect([select]));
	}, [dispatch, select]);
};

export default useMenuSelect;
