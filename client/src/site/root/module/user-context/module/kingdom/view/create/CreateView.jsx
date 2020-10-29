import {RightCircleOutlined} from "@ant-design/icons";
import {Button, Card, Col, Divider, Form, message, Result, Row, Typography} from "antd";
import SubtitleNameField from "component/form/SubtitleNameField";
import BaseCreateView from "component/view/BaseCreateView";
import {useEffect} from "react";
import {useTranslation} from "react-i18next";
import {useDispatch, useSelector} from "react-redux";
import {useLocation, useNavigate} from "react-router";
import KingdomAttributesRedux from "redux/kingdom/attributes/redux";
import KingdomCreateRedux from "redux/kingdom/create/redux";
import SessionRedux from "redux/session/redux";
import UserFetchRedux from "redux/user/fetch/redux";
import AttributeFields from "site/root/component/AttributeFields";
import KingdomIcon from "site/root/module/kingdom/component/icon/KingdomIcon";
import KingdomView from "site/root/module/user-context/module/kingdom/view/KingdomView";
import Routes from "site/Routes";
import numberRange from "utils/numberRange";

const id = "root.userContext.kingdom";
const longId = id + ".create";

const CreateView = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const location = useLocation();
	const history = useSelector(SessionRedux.selector.getHistory);
	const [form] = Form.useForm();
	const {t} = useTranslation();
	useEffect(() => {
		dispatch(KingdomAttributesRedux.fetch());
	}, [dispatch]);

	const user = useSelector(UserFetchRedux.selector.getPayload);
	const isLoading = useSelector(KingdomAttributesRedux.selector.isLoading);
	const attributes = useSelector(KingdomAttributesRedux.selector.getPayload);
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
				subTitle={<SubtitleNameField errors={errors} name={"name"} label={longId + ".form.name.label"} required={longId + ".form.name.required"} icon={<KingdomIcon/>}/>}
			>
				<Row justify={"space-around"}>
					<Col xs={24} xl={12}>
						<Row>
							<Col span={24}>
								<Card title={t(longId + ".form.attribute.title")}>
									<AttributeFields translation={longId} attributes={attributes}/>
								</Card>
							</Col>
						</Row>
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
					</Col>
					<Col xs={24} xl={12}>
						<Result
							icon={<></>}
							title={t(longId + ".list.title")}
							style={{paddingTop: 0}}
						>
							{numberRange(4).map(index => (
								<Typography.Paragraph key={index}>
									<RightCircleOutlined style={{color: "#1890ff"}}/>&nbsp;{t(longId + ".list.item-" + index)}
								</Typography.Paragraph>
							))}
						</Result>
					</Col>
				</Row>
			</BaseCreateView>
		</Form>
	);
};

export default CreateView;
