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
import KingdomRedux from "redux/kingdom/redux";
import SessionRedux from "redux/session/redux";
import AttributeFieldEditor from "site/root/component/AttributeFieldEditor";
import KingdomIcon from "site/root/module/kingdom/component/icon/KingdomIcon";
import useKingdomAttributes from "site/root/module/kingdom/hook/useKingdomAttributes";
import useKingdomAttributesSelector from "site/root/module/kingdom/hook/useKingdomAttributesSelector";
import KingdomView from "site/root/module/kingdom/view/KingdomView";
import Routes from "site/Routes";
import validationFor from "utils/form/validationFor";

const id = "root.kingdom";

const CreateView = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const location = useLocation();
	const history = useSelector(SessionRedux.selector.getHistory);
	const [form] = Form.useForm();
	const {t} = useTranslation();
	const params = useParams();
	const isLoading = useSelector(KingdomRedux.redux.attributes.selector.isLoading);
	const attributes = useKingdomAttributesSelector();
	const [errors, setErrors] = useState();
	useKingdomAttributes();

	return (
		<Form
			form={form}
			name={"kingdom"}
			autoComplete="off"
			onFinish={values => {
				dispatch(KingdomRedux.redux.create.dispatch.create({...values, ...{user: params.user}})).then(entity => {
					history.push(location.pathname);
					dispatch(SessionRedux.history(history));
					navigate(Routes.root.kingdomContext.dashboard.link(entity.id));
					message.success(t(id + ".create.message.success"));
				}, (error) => {
					setErrors(error);
					message.error(t(id + ".create.message.error"));
				});
			}}
		>
			<BaseCreateView
				base={KingdomView}
				loading={isLoading}
				id={id}
				icon={<KingdomIcon/>}
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
							children={<Input addonBefore={t(id + ".form.name.label")} suffix={<KingdomIcon/>}/>}
						/>
					</Centered>
				}
				subTitle={<CreateSubmitButtons form={form} translation={id}/>}
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
