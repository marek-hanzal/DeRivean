import {doKingdomCreate} from "site/root/module/kingdom/action/action";
import {doUserCreate, doUserSearch} from "site/root/module/user/action/action";
import Events from "utils/Events";
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
	navigate,
) => {
	doUserCreate(
		discovery,
		{
			name: "template",
			login: "template",
		},
		events,
		navigate,
	);
};

const quickCreateTemplateKingdom = (
	discovery,
	events,
	navigate,
) => {
	doUserSearch(
		discovery,
		{search: "template"},
		Events()
			.on("success", ({items}) => {
				if (!items[0]) {
					quickCreateTemplateUser(
						discovery,
						Events()
							.on("success", () => {
								quickCreateTemplateKingdom(discovery, events, navigate);
							})
					);
					return;
				}
				doKingdomCreate(
					discovery,
					{
						user: items[0].id,
						name: "template",
					},
					events,
					navigate,
				);
			}),
		navigate,
	);
};

export {
	doSearch,
	quickCreateTemplateUser,
	quickCreateTemplateKingdom,
};
