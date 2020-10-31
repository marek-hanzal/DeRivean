import {Form, Input, message} from "antd";
import BulletCard from "component/BulletCard";
import CreateSubmitButtons from "component/form/CreateSubmitButtons";
import Centered from "component/layout/Centered";
import DualSection from "component/layout/DualSection";
import BaseCreateView from "component/view/BaseCreateView";
import {useTranslation} from "react-i18next";
import {useDispatch, useSelector} from "react-redux";
import {useLocation, useNavigate, useParams} from "react-router";
import HeroRedux from "redux/hero/redux";
import SessionRedux from "redux/session/redux";
import AttributeFieldEditor from "site/root/component/AttributeFieldEditor";
import HeroIcon from "site/root/module/hero/component/icon/HeroIcon";
import useHeroAttributes from "site/root/module/hero/hook/useHeroAttributes";
import HeroView from "site/root/module/hero/view/HeroView";
import Routes from "site/Routes";
import validationFor from "utils/form/validationFor";

const id = "root.hero";

const CreateView = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const location = useLocation();
	const history = useSelector(SessionRedux.selector.getHistory);
	const [form] = Form.useForm();
	const {t} = useTranslation();
	const params = useParams();
	const isLoading = useSelector(HeroRedux.redux.attributes.selector.isLoading);
	const attributes = useSelector(HeroRedux.redux.attributes.selector.getPayload);
	const errors = useSelector(HeroRedux.redux.create.selector.getError);
	useHeroAttributes();

	return (
		<Form
			form={form}
			name={"hero"}
			autoComplete="off"
			onFinish={values => {
				dispatch(HeroRedux.redux.create.dispatch.create({...values, ...{kingdom: params.kingdom}})).then(entity => {
					history.push(location.pathname);
					dispatch(SessionRedux.history(history));
					navigate(Routes.root.heroContext.dashboard.link(entity.id));
					message.success(t(id + ".create.message.success"));
				}, () => {
					message.error(t(id + ".create.message.error"));
				});
			}}
		>
			<BaseCreateView
				base={HeroView}
				loading={isLoading}
				id={id}
				icon={<HeroIcon/>}
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
							children={<Input addonBefore={t(id + ".form.name.label")} suffix={<HeroIcon/>}/>}
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
