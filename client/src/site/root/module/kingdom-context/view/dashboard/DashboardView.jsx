import {Button, Col, Divider, Form, Row} from "antd";
import BulletCard from "component/BulletCard";
import DeferredInput from "component/form/DeferredInput";
import BaseDashboardView from "component/view/BaseDashboardView";
import {useTranslation} from "react-i18next";
import AttributeFieldEditor from "site/root/component/AttributeFieldEditor";
import KingdomContextIcon from "site/root/module/kingdom-context/component/icon/KingdomContextIcon";
import KingdomContextView from "site/root/module/kingdom-context/view/KingdomContextView";
import useKingdomAttributesSelector from "site/root/module/kingdom/hook/useKingdomAttributesSelector";
import useKingdomSelector from "site/root/module/kingdom/hook/useKingdomSelector";

const id = "root.kingdomContext";
const longId = id + ".dashboard";

const DashboardView = () => {
	const {t} = useTranslation();
	const [form] = Form.useForm();
	const kingdom = useKingdomSelector();
	const attributes = useKingdomAttributesSelector();
	const editor = false;
	return (
		<Form
			form={form}
			name={"kingdom"}
			autoComplete="off"
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
				title={<DeferredInput label={"root.kingdomContext.dashboard.view.name"} item={kingdom} name={"name"}/>}
			>
				<Row justify={"space-around"}>
					<Col xs={24} xl={12}>
						<Row>
							<Col span={24}>
								<AttributeFieldEditor editor={editor} translation={longId} attributes={attributes}/>
							</Col>
						</Row>
						{editor ? (
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
					</Col>
					<Col xs={24} xl={12}>
						<BulletCard translation={longId} count={4}/>
					</Col>
				</Row>
			</BaseDashboardView>
		</Form>
	);
};

export default DashboardView;
