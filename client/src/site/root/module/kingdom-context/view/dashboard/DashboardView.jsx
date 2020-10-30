import {Button, Divider, Form, Input, message, Space} from "antd";
import BulletCard from "component/BulletCard";
import CancelEditButton from "component/form/CancelEditButton";
import SubmitButton from "component/form/SubmitButton";
import EditIcon from "component/icon/EditIcon";
import Spinner from "component/icon/Spinner";
import Centered from "component/layout/Centered";
import DualSection from "component/layout/DualSection";
import BaseDashboardView from "component/view/BaseDashboardView";
import {useState} from "react";
import {useTranslation} from "react-i18next";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router";
import KingdomUpdateRedux from "redux/kingdom/update/redux";
import AttributeFieldEditor from "site/root/component/AttributeFieldEditor";
import useKingdomFetch from "site/root/module/kingdom-context/hook/useKingdomFetch";
import KingdomContextView from "site/root/module/kingdom-context/view/KingdomContextView";
import KingdomIcon from "site/root/module/kingdom/component/icon/KingdomIcon";
import useKingdomAttributes from "site/root/module/kingdom/hook/useKingdomAttributes";
import useKingdomAttributesSelector from "site/root/module/kingdom/hook/useKingdomAttributesSelector";
import validationFor from "utils/form/validationFor";
import values from "utils/form/values";

const id = "root.kingdomContext";
const longId = id + ".dashboard";

const DashboardView = () => {
	const dispatch = useDispatch();
	const {t} = useTranslation(["kingdom", "common"]);
	/**
	 * Edit mode toggle.
	 */
	const [edit, setEdit] = useState(false);
	/**
	 * Default (initial) kingdom values
	 */
	const [kingdom, setKingdom] = useState();
	const [form] = Form.useForm();
	const params = useParams();
	const attributes = useKingdomAttributesSelector();
	const errors = useSelector(KingdomUpdateRedux.selector.getError);
	useKingdomAttributes();

	/**
	 * Fetch initial kingdom data.
	 */
	useKingdomFetch(null, (data) => {
		/**
		 * Set internal state.
		 */
		setKingdom(data);
		/**
		 * Set form values wile maintaining untouched field state.
		 */
		values(form, data);
	});

	return (
		<Form
			form={form}
			name={"kingdom"}
			autoComplete="off"
			onFinish={kingdom => {
				dispatch(KingdomUpdateRedux.update({...kingdom, id: params.kingdom})).then(_ => {
					message.success(t("kingdom:update.success"));
					setEdit(false);
				}, () => {
					message.error(t("kingdom:update.error"));
				});
			}}
		>
			<BaseDashboardView
				base={KingdomContextView}
				id={"root.kingdomContext"}
				open={["root.kingdomContext.hero", "root.kingdomContext.building"]}
				icon={<Spinner enable={kingdom}/>}
				title={
					<Centered span={12}>
						<Form.Item
							{...validationFor("name", errors, t)}
							name={"name"}
							rules={[
								{
									required: true,
									message: t("kingdom:form.name.required"),
								}
							]}
							children={<Input disabled={!edit} addonBefore={t("kingdom:form.name.label")} suffix={<KingdomIcon/>}/>}
						/>
					</Centered>
				}
				subTitle={
					edit ?
						<Space split={<Divider type={"vertical"}/>}>
							<SubmitButton form={form} title={"kingdom:form.edit.submit.label"}/>
							<CancelEditButton form={form} setEdit={setEdit} translation={"kingdom"} initials={kingdom}/>
						</Space> :
						<Button type={"primary"} ghost size={"large"} disabled={!kingdom} onClick={() => setEdit(true)} icon={<EditIcon/>}>{t("kingdom:form.edit.label")}</Button>
				}
			>
				<DualSection
					left={
						<Centered span={24}>
							<AttributeFieldEditor edit={edit} translation={"kingdom"} attributes={attributes}/>
						</Centered>
					}
					right={<BulletCard translation={"kingdom:dashboard."} count={4}/>}
				/>
			</BaseDashboardView>
		</Form>
	);
};

export default DashboardView;
