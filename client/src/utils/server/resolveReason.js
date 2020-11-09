import Routes from "site/Routes";

const resolveReason = (onReason, navigate) => {
	return {
		...{
			401: () => setTimeout(() => navigate(Routes.root.sessionExpired.link()), 0),
		}, ...onReason
	};
};

export default resolveReason;
