import {Form, Input, message} from "antd";
import BulletCard from "component/BulletCard";
import CreateSubmitButtons from "component/form/CreateSubmitButtons";
import Centered from "component/layout/Centered";
import DualSection from "component/layout/DualSection";
import BaseCreateView from "component/view/BaseCreateView";
import {useState} from "react";
import {useTranslation} from "react-i18next";
import {useDispatch, useSelector} from "react-redux";
import {useLocation, useNavigate, useParams} from "react-router";
import BuildingRedux from "redux/building/redux";
import SessionRedux from "redux/session/redux";
import AttributeFieldEditor from "site/root/component/AttributeFieldEditor";
import BuildingIcon from "site/root/module/building/component/icon/BuildingIcon";
import useBuildingAttributes from "site/root/module/building/hook/useBuildingAttributes";
import BuildingView from "site/root/module/building/view/BuildingView";
import Routes from "site/Routes";
import validationFor from "utils/form/validationFor";

const id = "root.building";

const CreateView = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const location = useLocation();
	const params = useParams();
	const history = useSelector(SessionRedux.selector.getHistory);
	const [form] = Form.useForm();
	const {t} = useTranslation();
	const isLoading = useSelector(BuildingRedux.redux.attributes.selector.isLoading);
	const attributes = useSelector(BuildingRedux.redux.attributes.selector.getPayload);
	const [errors, setErrors] = useState();
	useBuildingAttributes();

	return (
		<Form
			form={form}
			name={"building"}
			autoComplete="off"
			onFinish={values => {
				dispatch(BuildingRedux.redux.create.dispatch.create({...values, ...{kingdom: params.kingdom}})).then(entity => {
					history.push(location.pathname);
					dispatch(SessionRedux.history(history));
					navigate(Routes.root.buildingContext.dashboard.link(entity.id));
					message.success(t(id + ".create.message.success"));
				}, (error) => {
					setErrors(error);
					message.error(t(id + ".create.message.error"));
				});
			}}
		>
			<BaseCreateView
				base={BuildingView}
				loading={isLoading}
				id={id}
				icon={<BuildingIcon/>}
				title={
					<Centered span={12}>
						<Form.Item
							{...validationFor("name", errors, t)}
							name={"name"}
							rules={[
								{
									required: true,
									message: t(id + ".form.name.required"),
								}
							]}
							children={<Input addonBefore={t(id + ".form.name.label")} suffix={<BuildingIcon/>}/>}
						/>
					</Centered>
				}
				subTitle={<CreateSubmitButtons onCancel={() => {
					setErrors(null);
				}} form={form} translation={id}/>}
			>
				<DualSection
					left={
						<Centered span={24}>
							<AttributeFieldEditor edit={true} translation={id} attributes={attributes}/>
						</Centered>
					}
					right={<BulletCard translation={id + ".create"} count={4}/>}
				/>
			</BaseCreateView>
		</Form>
	);
};

export default CreateView;
