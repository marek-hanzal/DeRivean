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
		link: function (id, state) {
			return this.index(state)[id].link;
		},
		fetch: function (id, state, uuid) {
			return this.link(id, state).replace("{id}", uuid);
		},
		page: function (id, state, page, name = null, param = null) {
			return name ? this.link(id, state).replace("{" + name + "}", param).replace("{page}", page) : this.link(id, state).replace("{page}", page);
		},
	},
};

export default DiscoveryRedux;
