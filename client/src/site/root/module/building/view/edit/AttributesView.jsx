import {message} from "antd";
import BaseEditor from "component/form/BaseEditor";
import useMenuSelect from "hook/useMenuSelect";
import {useTranslation} from "react-i18next";
import {useDispatch} from "react-redux";
import {dispatchBuildingUpdate} from "redux/building/redux";
import AttributesEditor from "site/root/component/AttributesEditor";
import BuildingContext from "site/root/module/building/component/BuildingContext";
import BuildingView from "site/root/module/building/view/BuildingView";

const AttributesView = () => {
	const dispatch = useDispatch();
	const {t} = useTranslation();
	useMenuSelect(["root.building.attributes"]);
	return (
		<BuildingView>
			<BuildingContext.Consumer>
				{({id}) => (
					<BaseEditor
						readyCount={2}
						onFinish={(values, initials) => {
							dispatchBuildingUpdate(dispatch, {id: initials.id, ...values}, () => {
								message.success(t(`${id}.attributes.updated`));
							});
						}}
						name={id}
						translation={id}
						children={<AttributesEditor context={BuildingContext}/>}
					/>
				)}
			</BuildingContext.Consumer>
		</BuildingView>
	);
};

export default AttributesView;
