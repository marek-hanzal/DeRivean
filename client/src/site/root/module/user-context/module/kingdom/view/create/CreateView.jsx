import {Button, Col, Divider, Form, Input, message, Row} from "antd";
import BulletCard from "component/BulletCard";
import Centered from "component/layout/Centered";
import DualSection from "component/layout/DualSection";
import BaseCreateView from "component/view/BaseCreateView";
import {useTranslation} from "react-i18next";
import {useDispatch, useSelector} from "react-redux";
import {useLocation, useNavigate} from "react-router";
import KingdomAttributesRedux from "redux/kingdom/attributes/redux";
import KingdomCreateRedux from "redux/kingdom/create/redux";
import SessionRedux from "redux/session/redux";
import AttributeFieldEditor from "site/root/component/AttributeFieldEditor";
import KingdomIcon from "site/root/module/kingdom/component/icon/KingdomIcon";
import useKingdomAttributes from "site/root/module/kingdom/hook/useKingdomAttributes";
import useKingdomAttributesSelector from "site/root/module/kingdom/hook/useKingdomAttributesSelector";
import KingdomView from "site/root/module/user-context/module/kingdom/view/KingdomView";
import useUserSelector from "site/root/module/user/hook/useUserSelector";
import Routes from "site/Routes";
import enableSubmit from "utils/form/enableSubmit";
import validationFor from "utils/form/validationFor";

const id = "root.userContext.kingdom";
const longId = id + ".create";

const CreateView = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const location = useLocation();
	const history = useSelector(SessionRedux.selector.getHistory);
	const [form] = Form.useForm();
	const {t} = useTranslation(["kingdom"]);
	useKingdomAttributes();

	const user = useUserSelector();
	const isLoading = useSelector(KingdomAttributesRedux.selector.isLoading);
	const attributes = useKingdomAttributesSelector();
	const errors = useSelector(KingdomCreateRedux.selector.getError);

	return (
		<Form
			form={form}
			name={"kingdom"}
			autoComplete="off"
			onFinish={kingdom => {
				dispatch(KingdomCreateRedux.create({...kingdom, ...{user: user.id}})).then((kingdom) => {
					history.push(location.pathname);
					dispatch(SessionRedux.history(history));
					navigate(Routes.root.kingdomContext.dashboard.link(kingdom.id));
					message.success(t(longId + ".message.success"));
				}, () => {
					message.error(t(longId + ".message.error"));
				});
			}}
		>
			<BaseCreateView
				base={KingdomView}
				loading={isLoading}
				id={id}
				icon={<KingdomIcon/>}
				subTitle={
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
							children={<Input addonBefore={t("kingdom:form.name.label")} suffix={<KingdomIcon/>}/>}
						/>
					</Centered>
				}
			>
				<DualSection
					left={
						<>
							<Row>
								<Col span={24}>
									<AttributeFieldEditor translation={longId} attributes={attributes}/>
								</Col>
							</Row>
							<Divider type="horizontal"/>
							<Centered>
								<Form.Item shouldUpdate={true}>
									{() => (
										<Button
											type="primary"
											size={"large"}
											htmlType="submit"
											disabled={enableSubmit(form, ["name"])}
											children={t("kingdom:form.submit.label")}
										/>
									)}
								</Form.Item>
							</Centered>
						</>
					}
					right={<BulletCard translation={longId} count={4}/>}
				/>
			</BaseCreateView>
		</Form>
	);
};

export default CreateView;
