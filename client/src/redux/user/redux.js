import axios from "axios";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import dismissAction from "utils/action/actions/dismissAction";
import CreateActionRedux from "utils/redux/CreateActionRedux";
import CreateCommonRedux from "utils/redux/CreateCommonRedux";
import CreateFetchRedux from "utils/redux/CreateFetchRedux";
import CreateLinkRedux from "utils/redux/CreateLinkRedux";
import CreatePostRedux from "utils/redux/CreatePostRedux";

const UserRedux = CreateCommonRedux(
	"user",
	"root.user.create",
	"root.user.update",
	"root.user.delete",
	"root.user.fetch",
	"root.user.page",
	{
		register: CreateActionRedux("user", "register", "public.user.register", {
			dismiss: dismissAction("user.register"),
		}),
		login: CreateActionRedux("user", "login", "public.user.login", {
			dismiss: dismissAction("user.login"),
		}),
		attributes: CreateLinkRedux("user", "attributes", "root.user.attributes"),
		search: CreatePostRedux("user", "search", "root.user.search"),
		statistics: CreateFetchRedux("statistics", "root.user.statistics", "{user}"),
	},
);

const useUserFetch = (uuid, onSuccess = user => user, onFailure = error => error) => {
	const dispatch = useDispatch();
	useEffect(() => {
		const cancelToken = axios.CancelToken.source();
		dispatch(UserRedux.redux.fetch.dispatch.fetch(uuid)).then(user => {
			onSuccess(user);
		}, error => {
			if (error.cancel) {
				return;
			}
			onFailure(error);
		});
		return () => cancelToken.cancel();
	}, [dispatch, uuid]);
};

export {
	UserRedux,
	useUserFetch,
};
