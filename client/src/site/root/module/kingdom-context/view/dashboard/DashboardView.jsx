import {Button, Col, Divider, Form, Row} from "antd";
import BulletCard from "component/BulletCard";
import SubtitleNameField from "component/form/SubtitleNameField";
import DualSection from "component/layout/DualSection";
import BaseDashboardView from "component/view/BaseDashboardView";
import {useState} from "react";
import {useTranslation} from "react-i18next";
import {useSelector} from "react-redux";
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
	const {t} = useTranslation();
	const [edit, setEdit] = useState(false);
	const [form] = Form.useForm();
	const kingdom = useKingdomSelector();
	const attributes = useKingdomAttributesSelector();
	const errors = useSelector(KingdomUpdateRedux.selector.getError);
	useKingdomAttributes();
	return (
		<Form
			form={form}
			name={"kingdom"}
			autoComplete="off"
			initialValues={kingdom}
			onFinish={kingdom => {
				console.log("update kingdom", kingdom);
				// dispatch(KingdomCreateRedux.create({...kingdom, ...{user: user.id}})).then((kingdom) => {
				// 	history.push(location.pathname);
				// 	dispatch(SessionRedux.history(history));
				// 	navigate(Routes.root.kingdomContext.dashboard.link(kingdom.id));
				// 	message.success(t(longId + ".message.success"));
				// }, () => {
				// 	message.error(t(longId + ".message.error"));
				// });
			}}
		>
			<BaseDashboardView
				base={KingdomContextView}
				id={"root.kingdomContext"}
				open={["root.kingdomContext.hero", "root.kingdomContext.building"]}
				icon={<KingdomContextIcon/>}
				// title={<DeferredInput label={"root.kingdomContext.dashboard.view.name"} item={kingdom} name={"name"}/>}
				title={<SubtitleNameField errors={errors} name={"name"} label={longId + ".form.name.label"} required={longId + ".form.name.required"} icon={<KingdomIcon/>}/>}
				subTitle={<Button type={"primary"} ghost onClick={() => setEdit(!edit)}>{t(longId + ".edit")}</Button>}
			>
				<DualSection
					left={
						<>
							<Row>
								<Col span={24}>
									<AttributeFieldEditor editor={edit} translation={longId} attributes={attributes}/>
								</Col>
							</Row>
							{edit ? (
								<>
									<Divider type="horizontal"/>
									<Row justify={"space-around"}>
										<Col>
											<Button
												type="primary"
												size={"large"}
												htmlType="submit"
												children={t(longId + ".form.button.label")}
											/>
										</Col>
									</Row>
								</>
							) : null}
						</>}
					right={<BulletCard translation={longId} count={4}/>}
				/>
			</BaseDashboardView>
		</Form>
	);
};

export default DashboardView;
