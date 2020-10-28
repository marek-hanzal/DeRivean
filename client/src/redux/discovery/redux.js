import LoadingRedux from "redux/loading/redux";
import {Server} from "server";
import failureAction from "utils/action/actions/failureAction";
import requestAction from "utils/action/actions/requestAction";
import successAction from "utils/action/actions/successAction";
import reducerActions from "utils/action/reducerActions";

const DiscoveryRedux = {
	request: requestAction("discovery"),
	success: successAction("discovery"),
	failure: failureAction("discovery"),
	fetch: function (href) {
		return dispatch => {
			dispatch(LoadingRedux.start());
			dispatch(this.request());
			return Server.get(href)
				.then(({data}) => {
					dispatch(this.success(data));
					dispatch(LoadingRedux.finish());
				})
				.catch(error => {
					dispatch(this.failure({...error}));
					dispatch(LoadingRedux.finish());
				});
		};
	},
	reducer: function () {
		return reducerActions([
			this.request,
			this.success,
			this.failure,
		]);
	},
	selector: {
		branch: state => state.discovery,
		status: state => DiscoveryRedux.selector.branch(state).status,
		index: state => DiscoveryRedux.selector.branch(state).payload,
		public: {
			user: {
				register: state => DiscoveryRedux.selector.index(state)["public.user.register"].link,
				login: state => DiscoveryRedux.selector.index(state)["public.user.login"].link,
			},
		},
		root: {
			entity: {
				page: (state, page) => DiscoveryRedux.selector.index(state)["root.entity.page"].link.replace("{page}", page),
			},
			user: {
				create: state => DiscoveryRedux.selector.index(state)["public.user.register"].link,
				fetch: (state, uuid) => DiscoveryRedux.selector.index(state)["root.user.fetch"].link.replace("{id}", uuid),
				page: (state, page) => DiscoveryRedux.selector.index(state)["root.user.page"].link.replace("{page}", page),
				kingdom: {
					page: (state, user, page) => DiscoveryRedux.selector.index(state)["root.user.kingdom.page"].link.replace("{page}", page).replace("{user}", user),
				}
			},
			kingdom: {
				attributes: state => DiscoveryRedux.selector.index(state)["root.kingdom.attributes"].link,
				create: state => DiscoveryRedux.selector.index(state)["root.kingdom.create"].link,
				fetch: (state, uuid) => DiscoveryRedux.selector.index(state)["root.kingdom.fetch"].link.replace("{id}", uuid),
			},
		},
	},
};

export default DiscoveryRedux;
