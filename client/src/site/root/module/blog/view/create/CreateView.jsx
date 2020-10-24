import BaseCreateView from "component/view/BaseCreateView";
import BlogIcon from "site/root/module/blog/component/icon/BlogIcon";
import BlogView from "site/root/module/blog/view/BlogView";

const CreateView = () =>
	<BaseCreateView
		id={"root.blog"}
		icon={<BlogIcon/>}
		base={BlogView}
	/>
;

export default CreateView;
