import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {onContentFullsize} from "redux/content/action";

const useFullsizeContent = (fullsize, reset = true) => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(onContentFullsize(fullsize));
		return () => reset ? dispatch(onContentFullsize(false)) : null;
	}, [dispatch, fullsize, reset]);
};

export default useFullsizeContent;
