import {Button, Divider, Form, Input, message, Popconfirm, Space} from "antd";
import BulletCard from "component/BulletCard";
import DeleteItemIcon from "component/icon/DeleteItemIcon";
import EditIcon from "component/icon/EditIcon";
import LoaderIcon from "component/icon/LoaderIcon";
import SubmitIcon from "component/icon/SubmitIcon";
import Centered from "component/layout/Centered";
import DualSection from "component/layout/DualSection";
import BaseDashboardView from "component/view/BaseDashboardView";
import {useState} from "react";
import {useTranslation} from "react-i18next";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router";
import KingdomUpdateRedux from "redux/kingdom/update/redux";
import AttributeFieldEditor from "site/root/component/AttributeFieldEditor";
import KingdomContextIcon from "site/root/module/kingdom-context/component/icon/KingdomContextIcon";
import useKingdomFetch from "site/root/module/kingdom-context/hook/useKingdomFetch";
import KingdomContextView from "site/root/module/kingdom-context/view/KingdomContextView";
import KingdomIcon from "site/root/module/kingdom/component/icon/KingdomIcon";
import useKingdomAttributes from "site/root/module/kingdom/hook/useKingdomAttributes";
import useKingdomAttributesSelector from "site/root/module/kingdom/hook/useKingdomAttributesSelector";
import enableSubmit from "utils/form/enableSubmit";
import validationFor from "utils/form/validationFor";

const id = "root.kingdomContext";
const longId = id + ".dashboard";

const DashboardView = () => {
	const {t} = useTranslation(["kingdom", "common"]);
	const [edit, setEdit] = useState(false);
	const [kingdom, setKingdom] = useState();
	const [form] = Form.useForm();
	const params = useParams();
	const dispatch = useDispatch();
	const attributes = useKingdomAttributesSelector();
	const errors = useSelector(KingdomUpdateRedux.selector.getError);
	useKingdomAttributes();

	useKingdomFetch(null, (data) => {
		setKingdom(data);
		form.setFieldsValue(data);
	});

	return (
		<Form
			form={form}
			name={"kingdom"}
			autoComplete="off"
			onFinish={kingdom => {
				console.log("update kingdom", kingdom);
				dispatch(KingdomUpdateRedux.update(kingdom, params.kingdom)).then(_ => {
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
				icon={kingdom ? <KingdomContextIcon/> : <LoaderIcon spin/>}
				title={
					<Centered span={6}>
						<Form.Item
							{...validationFor("name", errors, t)}
							name={"name"}
							rules={[
								{
									required: true,
									message: t("kingdom:form.name.required"),
								}
							]}
						>
							<Input disabled={!edit} addonBefore={t("kingdom:form.name.label")} suffix={<KingdomIcon/>}/>
						</Form.Item>
					</Centered>
				}
				subTitle={
					edit ?
						<Space split={<Divider type={"vertical"}/>}>
							<Form.Item shouldUpdate={true} noStyle>
								{() => (
									<Button
										type={"primary"}
										size={"large"}
										htmlType={"submit"}
										icon={<SubmitIcon/>}
										disabled={enableSubmit(form, ["name"])}
										children={t("kingdom:form.edit.submit.label")}
									/>
								)}
							</Form.Item>
							<Popconfirm
								okText={t("common:yes")}
								cancelText={t("common:no")}
								title={t("kingdom:form.edit.cancelConfirm")}
								onConfirm={() => {
									setEdit(false);
									form.setFieldsValue(kingdom);
								}}
							>
								<Button type={"danger"} ghost icon={<DeleteItemIcon/>}>{t("kingdom:form.cancel.label")}</Button>
							</Popconfirm>
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
					right={<BulletCard translation={longId} count={4}/>}
				/>
			</BaseDashboardView>
		</Form>
	);
};

export default DashboardView;
