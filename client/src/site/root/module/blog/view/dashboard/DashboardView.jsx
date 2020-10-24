import BaseDashboardView from "component/view/BaseDashboardView";
import BlogIcon from "site/root/module/blog/component/icon/BlogIcon";
import BlogView from "site/root/module/blog/view/BlogView";

const DashboardView = () =>
	<BaseDashboardView
		id={"root.blog"}
		icon={<BlogIcon/>}
		base={BlogView}
	/>
;

export default DashboardView;
