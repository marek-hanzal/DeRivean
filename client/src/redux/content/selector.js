const branch = state => state.content;

const isContentFullsize = state => branch(state).fullsize;

export {
	isContentFullsize,
};
