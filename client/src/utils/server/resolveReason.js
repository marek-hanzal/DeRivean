import Routes from "site/Routes";

const resolveReason = (onReason, navigate) => {
	return {
		...{
			401: () => navigate(Routes.root.sessionExpired.link()),
		}, ...onReason
	};
};

export default resolveReason;
