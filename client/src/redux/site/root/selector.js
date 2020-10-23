import { siteBranch } from "redux/site/selector";

const branch = state => siteBranch(state).root;

const isSiderEnabled = state => branch(state).sider;

const isBreadcrumbsEnabled = state => branch(state).breadcrumbs;

export {
	isSiderEnabled,
	isBreadcrumbsEnabled,
};
