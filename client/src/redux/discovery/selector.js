const branch = state => state.discovery;

const index = state => branch(state).payload;

const DiscoverySelector = {
	status: state => branch(state).status,
	public: {
		user: {
			register: state => index(state)["public.user.register"].link,
			login: state => index(state)["public.user.login"].link,
		}
	},
	root: {
		entity: {
			page: (state, page) => index(state)["root.entity.page"].link.replace("{page}", page),
		},
		user: {
			create: state => index(state)["public.user.register"].link,
			page: (state, page) => index(state)["root.user.page"].link.replace("{page}", page),
			fetch: (state, uuid) => index(state)["root.user.fetch"].link.replace("{id}", uuid),
		},
		kingdom: {
			attributes: state => index(state)["root.kingdom.attributes"].link,
		}
	}
};

export default DiscoverySelector;
