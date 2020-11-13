import {Card} from "antd";
import moment from "moment";
import CommonEditView from "site/common/view/CommonEditView";
import BuiltInput from "site/root/module/building/component/form/BuiltInput";
import BuildingView from "site/root/module/building/view/BuildingView";

const EditView = () => {
	return (
		<BuildingView>
			<CommonEditView
				defaultEnableSubmit={true}
				inputMapper={values => {
					return {...values, built: moment(values.built)};
				}}
			>
				<Card>
					<BuiltInput/>
				</Card>
			</CommonEditView>
		</BuildingView>
	);
};

export default EditView;
