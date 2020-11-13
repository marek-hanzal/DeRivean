import {Card, Divider} from "antd";
import ModuleContext from "component/ModuleContext";
import CommonCreateView from "site/common/view/CommonCreateView";
import AttributeFieldEditor from "site/root/component/AttributeFieldEditor";
import BuiltInput from "site/root/module/building/component/form/BuiltInput";
import BuildingView from "site/root/module/building/view/BuildingView";

const CreateView = () => {
	return (
		<BuildingView>
			<ModuleContext.Consumer>
				{({parent}) => (
					<CommonCreateView
						param={parent}
						defaultEnableSubmit={true}
						readyCount={1}
					>
						<Card>
							<BuiltInput/>
						</Card>
						<Divider type={"horizontal"}/>
						<AttributeFieldEditor/>
					</CommonCreateView>
				)}
			</ModuleContext.Consumer>
		</BuildingView>
	);
};

export default CreateView;
