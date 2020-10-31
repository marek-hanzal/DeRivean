import {Form, Input, message} from "antd";
import BulletCard from "component/BulletCard";
import EditSubmitButtons from "component/form/EditSubmitButtons";
import Spinner from "component/icon/Spinner";
import Centered from "component/layout/Centered";
import DualSection from "component/layout/DualSection";
import BaseDashboardView from "component/view/BaseDashboardView";
import {useState} from "react";
import {useTranslation} from "react-i18next";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router";
import BuildingRedux from "redux/building/redux";
import AttributeFieldEditor from "site/root/component/AttributeFieldEditor";
import BuildingContextView from "site/root/module/building-context/view/KingdomContextView";
import BuildingIcon from "site/root/module/building/component/icon/BuildingIcon";
import useBuildingAttributes from "site/root/module/building/hook/useBuildingAttributes";
import useBuildingFetch from "site/root/module/building/hook/useBuildingFetch";
import validationFor from "utils/form/validationFor";
import values from "utils/form/values";

const DashboardView = () => {
	const dispatch = useDispatch();
	const {t} = useTranslation();
	const [edit, setEdit] = useState(false);
	const [building, setBuilding] = useState();
	const [form] = Form.useForm();
	const params = useParams();
	const attributes = useSelector(BuildingRedux.redux.attributes.selector.getPayload);
	const errors = useSelector(BuildingRedux.redux.update.selector.getError);
	useBuildingAttributes();

	useBuildingFetch(params.building, (building) => {
		setBuilding(building);
		values(form, building);
	});

	return (
		<Form
			form={form}
			name={"building"}
			autoComplete="off"
			onFinish={values => {
				dispatch(BuildingRedux.redux.update.dispatch.update({...values, id: params.building})).then(_ => {
					message.success(t("root.building.update.success"));
					setEdit(false);
				}, () => {
					message.error(t("root.building.update.error"));
				});
			}}
		>
			<BaseDashboardView
				base={BuildingContextView}
				id={"root.buildingContext"}
				open={["root.hero", "root.building"]}
				icon={<Spinner icon={<BuildingIcon/>} enable={building}/>}
				title={
					<Centered span={12}>
						<Form.Item
							{...validationFor("name", errors, t)}
							name={"name"}
							rules={[
								{
									required: true,
									message: t("root.building.form.name.required"),
								}
							]}
							children={<Input disabled={!edit} addonBefore={t("root.building.form.name.label")} suffix={<BuildingIcon/>}/>}
						/>
					</Centered>
				}
				subTitle={<EditSubmitButtons initials={building} edit={edit} setEdit={setEdit} form={form} translation={"building"}/>}
			>
				<DualSection
					left={
						<Centered span={24}>
							<AttributeFieldEditor edit={edit} translation={"building"} attributes={attributes}/>
						</Centered>
					}
					right={<BulletCard translation={"root.building.dashboard."} count={4}/>}
				/>
			</BaseDashboardView>
		</Form>
	);
};

export default DashboardView;
