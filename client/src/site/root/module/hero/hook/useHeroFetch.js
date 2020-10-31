import {useEffect} from "react";
import {useDispatch} from "react-redux";
import HeroRedux from "redux/hero/redux";

const useHeroFetch = (uuid, then = () => ({})) => {
	const dispatch = useDispatch();
	// eslint-disable-next-line
	useEffect(() => dispatch(HeroRedux.redux.fetch.dispatch.fetch(uuid)).then(then), [dispatch, uuid]);
};

export default useHeroFetch;
