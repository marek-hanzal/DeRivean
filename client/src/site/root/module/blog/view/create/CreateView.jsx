import BaseCreateView from "component/view/BaseCreateView";
import BlogIcon from "site/root/module/blog/component/icon/BlogIcon";
import RootView from "site/root/view/RootView";

const CreateView = () =>
	<BaseCreateView
		base={RootView}
		id={"root.blog"}
		icon={<BlogIcon/>}
	/>
;

export default CreateView;
