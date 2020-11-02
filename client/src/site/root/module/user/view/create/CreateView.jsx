import {Button} from "antd";
import BaseCreateView from "component/view/BaseCreateView";
import UserIcon from "site/root/module/user/component/icon/UserIcon";
import RootView from "site/root/view/RootView";

const CreateView = () => {
		return (
			<BaseCreateView
				base={RootView}
				id={"root.user"}
				icon={<UserIcon/>}
			>
				<div>
					... rest of fields
				</div>
				<Button type={"primary"}>[Submit]</Button>
			</BaseCreateView>
		);
	}
;

export default CreateView;
