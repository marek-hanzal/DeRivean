const branch = state => state.session;

const getSession = state => branch(state);

export {
	branch as sessionBranch,
	getSession,
};
