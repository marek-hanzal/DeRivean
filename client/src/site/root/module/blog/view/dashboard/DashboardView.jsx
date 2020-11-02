import BaseDashboardView from "component/view/BaseDashboardView";
import BlogIcon from "site/root/module/blog/component/icon/BlogIcon";
import RootView from "site/root/view/RootView";

const DashboardView = () =>
	<BaseDashboardView
		base={RootView}
		id={"root.blog"}
		icon={<BlogIcon/>}
	/>
;

export default DashboardView;
