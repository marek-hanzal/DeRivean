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
import KingdomRedux from "redux/kingdom/redux";
import AttributeFieldEditor from "site/root/component/AttributeFieldEditor";
import KingdomContextView from "site/root/module/kingdom-context/view/KingdomContextView";
import KingdomIcon from "site/root/module/kingdom/component/icon/KingdomIcon";
import useKingdomAttributes from "site/root/module/kingdom/hook/useKingdomAttributes";
import useKingdomAttributesSelector from "site/root/module/kingdom/hook/useKingdomAttributesSelector";
import useKingdomFetch from "site/root/module/kingdom/hook/useKingdomFetch";
import validationFor from "utils/form/validationFor";
import values from "utils/form/values";

const DashboardView = () => {
	const dispatch = useDispatch();
	const {t} = useTranslation();
	const [edit, setEdit] = useState(false);
	const [kingdom, setKingdom] = useState();
	const [form] = Form.useForm();
	const params = useParams();
	const attributes = useKingdomAttributesSelector();
	const errors = useSelector(KingdomRedux.redux.update.selector.getError);
	useKingdomAttributes();

	useKingdomFetch(params.kingdom, kingdom => {
		setKingdom(kingdom);
		values(form, kingdom);
	});

	return (
		<Form
			form={form}
			name={"kingdom"}
			autoComplete="off"
			onFinish={values => {
				dispatch(KingdomRedux.redux.update.dispatch.update({...values, id: params.kingdom})).then(_ => {
					message.success(t("root.kingdom.update.success"));
					setEdit(false);
				}, () => {
					message.error(t("root.kingdom.update.error"));
				});
			}}
		>
			<BaseDashboardView
				base={KingdomContextView}
				id={"root.kingdomContext"}
				open={["root.hero", "root.building"]}
				icon={<Spinner icon={<KingdomIcon/>} enable={kingdom}/>}
				title={
					<Centered span={12}>
						<Form.Item
							{...validationFor("name", errors, t)}
							name={"name"}
							rules={[
								{
									required: true,
									message: t("root.kingdom.form.name.required"),
								}
							]}
							children={<Input disabled={!edit} addonBefore={t("root.kingdom.form.name.label")} suffix={<KingdomIcon/>}/>}
						/>
					</Centered>
				}
				subTitle={<EditSubmitButtons initials={kingdom} edit={edit} setEdit={setEdit} form={form} translation={"root.kingdom.dashboard"}/>}
			>
				<DualSection
					left={
						<Centered span={24}>
							<AttributeFieldEditor edit={edit} translation={"root.kingdom"} attributes={attributes}/>
						</Centered>
					}
					right={<BulletCard translation={"root.kingdom.dashboard"} count={4}/>}
				/>
			</BaseDashboardView>
		</Form>
	);
};

export default DashboardView;
