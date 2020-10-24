import {Button} from "antd";
import CreateIcon from "component/icon/CreateIcon";
import BaseCreateView from "component/view/BaseCreateView";
import UserView from "site/root/module/user/view/UserView";

const CreateView = () => {
		return (
			<BaseCreateView
				base={UserView}
				id={"root.user"}
				icon={<CreateIcon/>}
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
