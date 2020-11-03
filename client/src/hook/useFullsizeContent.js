import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {ContentRedux} from "redux/content/redux";

const useFullsizeContent = (fullsize, reset = true) => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(ContentRedux.setFullsize(fullsize));
		return () => reset ? dispatch(ContentRedux.setFullsize(false)) : null;
	}, [dispatch, fullsize, reset]);
};

export default useFullsizeContent;
