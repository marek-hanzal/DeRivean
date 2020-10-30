import LoadingRedux from "redux/loading/redux";
import {Server} from "server";
import fetchActions from "utils/action/actions/fetchActions";
import fetchReducer from "utils/action/fetchReducer";

const actions = fetchActions("discovery");

const DiscoveryRedux = {
	fetch: function (href) {
		return dispatch => {
			dispatch(LoadingRedux.start());
			dispatch(actions.request());
			return Server.get(href)
				.then(({data}) => {
					dispatch(actions.success(data));
					dispatch(LoadingRedux.finish());
					return Promise.resolve(data);
				})
				.catch(error => {
					dispatch(actions.failure({...error}));
					dispatch(LoadingRedux.finish());
					return Promise.reject(error);
				});
		};
	},
	reducer: () => fetchReducer(actions),
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
				create: state => DiscoveryRedux.selector.index(state)["root.user.create"].link,
				update: state => DiscoveryRedux.selector.index(state)["root.user.update"].link,
				fetch: (state, uuid) => DiscoveryRedux.selector.index(state)["root.user.fetch"].link.replace("{id}", uuid),
				page: (state, page) => DiscoveryRedux.selector.index(state)["root.user.page"].link.replace("{page}", page),
				kingdom: {
					page: (state, user, page) => DiscoveryRedux.selector.index(state)["root.user.kingdom.page"].link.replace("{page}", page).replace("{user}", user),
				}
			},
			kingdom: {
				attributes: state => DiscoveryRedux.selector.index(state)["root.kingdom.attributes"].link,
				create: state => DiscoveryRedux.selector.index(state)["root.kingdom.create"].link,
				update: state => DiscoveryRedux.selector.index(state)["root.kingdom.update"].link,
				fetch: (state, uuid) => DiscoveryRedux.selector.index(state)["root.kingdom.fetch"].link.replace("{id}", uuid),
			},
			building: {
				attributes: state => DiscoveryRedux.selector.index(state)["root.building.attributes"].link,
				create: state => DiscoveryRedux.selector.index(state)["root.building.create"].link,
				update: state => DiscoveryRedux.selector.index(state)["root.building.update"].link,
				fetch: (state, uuid) => DiscoveryRedux.selector.index(state)["root.building.fetch"].link.replace("{id}", uuid),
			},
		},
	},
};

export default DiscoveryRedux;
