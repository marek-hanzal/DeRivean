import {Button, Col, Divider, Form, message, Popconfirm, Row, Space} from "antd";
import BulletCard from "component/BulletCard";
import SubtitleNameField from "component/form/SubtitleNameField";
import DualSection from "component/layout/DualSection";
import BaseDashboardView from "component/view/BaseDashboardView";
import {useState} from "react";
import {useTranslation} from "react-i18next";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router";
import KingdomUpdateRedux from "redux/kingdom/update/redux";
import AttributeFieldEditor from "site/root/component/AttributeFieldEditor";
import KingdomContextIcon from "site/root/module/kingdom-context/component/icon/KingdomContextIcon";
import KingdomContextView from "site/root/module/kingdom-context/view/KingdomContextView";
import KingdomIcon from "site/root/module/kingdom/component/icon/KingdomIcon";
import useKingdomAttributes from "site/root/module/kingdom/hook/useKingdomAttributes";
import useKingdomAttributesSelector from "site/root/module/kingdom/hook/useKingdomAttributesSelector";
import useKingdomSelector from "site/root/module/kingdom/hook/useKingdomSelector";

const id = "root.kingdomContext";
const longId = id + ".dashboard";

const DashboardView = () => {
	const {t} = useTranslation(["kingdom", "common"]);
	const [edit, setEdit] = useState(false);
	const [form] = Form.useForm();
	const params = useParams();
	const dispatch = useDispatch();
	const kingdom = useKingdomSelector();
	const attributes = useKingdomAttributesSelector();
	const errors = useSelector(KingdomUpdateRedux.selector.getError);
	useKingdomAttributes();
	return (
		<Form
			form={form}
			name={"kingdom"}
			autoComplete="off"
			onFinish={kingdom => {
				setEdit(false);
				console.log("update kingdom", kingdom);
				dispatch(KingdomUpdateRedux.update(kingdom, params.kingdom)).then(_ => {
					message.success(t("kingdom:update.success"));
				}, () => {
					message.error(t("kingdom:update.error"));
				});
			}}
		>
			<BaseDashboardView
				base={KingdomContextView}
				id={"root.kingdomContext"}
				open={["root.kingdomContext.hero", "root.kingdomContext.building"]}
				icon={<KingdomContextIcon/>}
				title={<SubtitleNameField errors={errors} name={"name"} label={"kingdom:form.name.label"} required={"kingdom:form.name.required"} icon={<KingdomIcon/>}/>}
				subTitle={
					edit ?
						<Space split={<Divider type={"vertical"}/>}>
							<Button type={"primary"} htmlType={"submit"} size={"large"}>{t("kingdom:form.edit.submit.label")}</Button>
							<Popconfirm
								okText={t("common:yes")}
								cancelText={t("common:no")}
								title={t("kingdom:form.edit.cancelConfirm")}
								onConfirm={() => setEdit(false)}
							>
								<Button type={"danger"} ghost size={"large"}>{t("kingdom:form.cancel.label")}</Button>
							</Popconfirm>
						</Space> :
						<Button type={"primary"} ghost size={"large"} onClick={() => setEdit(true)}>{t("kingdom:form.edit.label")}</Button>
				}
			>
				<DualSection
					left={
						<Row>
							<Col span={24}>
								<AttributeFieldEditor editor={edit} translation={longId} attributes={attributes}/>
							</Col>
						</Row>}
					right={<BulletCard translation={longId} count={4}/>}
				/>
			</BaseDashboardView>
		</Form>
	);
};

export default DashboardView;
