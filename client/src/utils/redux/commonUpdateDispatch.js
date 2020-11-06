const commonUpdateDispatch = (redux) => {
	return (
		dispatch,
		update,
		onSuccess = data => null,
		onFailure = error => null,
	) => {
		dispatch(redux.redux.update.dispatch.update(update)).then(
			onSuccess,
			error => {
				if (error.cancel) {
					return;
				}
				onFailure(error);
			}
		);
	};
};

export default commonUpdateDispatch;
