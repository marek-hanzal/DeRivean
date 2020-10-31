import {useEffect} from "react";
import {useDispatch} from "react-redux";
import HeroRedux from "redux/hero/redux";

const useHeroAttributes = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(HeroRedux.redux.attributes.dispatch.attributes());
	}, [dispatch]);
};

export default useHeroAttributes;
