import miniAction from "utils/action/actions/miniAction";

const
	onSider       = miniAction("site.root.sider", "sider"),
	onBreadcrumbs = miniAction("site.root.breadcrumbs", "breadcrumbs");

export {
	onSider,
	onBreadcrumbs,
};
