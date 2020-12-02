import {Events, Server} from "@leight-core/leight";
import {doKingdomCreate} from "../module/kingdom/action/action";
import {doUserCreate, doUserSearch} from "../module/user/action/action";

const doSearch = (
	discovery,
	data,
	events,
) => Server.httpPost(
	discovery.link("root.search"),
	data,
	events,
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

const quickCreateTemplateKingdom = (
	discovery,
	events,
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
								quickCreateTemplateKingdom(discovery, events);
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
				);
			}),
	);
};

export {
	doSearch,
	quickCreateTemplateUser,
	quickCreateTemplateKingdom,
};
