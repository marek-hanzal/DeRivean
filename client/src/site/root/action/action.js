import {doUserCreate} from "site/root/module/user/action/action";
import post from "utils/server/post";

const doSearch = (
	discovery,
	data,
	events,
	navigate,
	cancelToken = null,
) => post(
	discovery.link("root.search"),
	data,
	events,
	navigate,
	cancelToken,
);

const quickCreateTemplateUser = (
	discovery,
	events,
) => {
	doUserCreate(
		discovery,
		{
			name: "template",
			login: "template",
		},
		events,
	);
};

export {
	doSearch,
	quickCreateTemplateUser,
};
