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
import HeroRedux from "redux/hero/redux";
import AttributeFieldEditor from "site/root/component/AttributeFieldEditor";
import HeroContextView from "site/root/module/hero-context/view/HeroContextView";
import HeroIcon from "site/root/module/hero/component/icon/HeroIcon";
import useHeroAttributes from "site/root/module/hero/hook/useHeroAttributes";
import useHeroFetch from "site/root/module/hero/hook/useHeroFetch";
import validationFor from "utils/form/validationFor";
import values from "utils/form/values";

const DashboardView = () => {
	const dispatch = useDispatch();
	const {t} = useTranslation();
	const [edit, setEdit] = useState(false);
	const [hero, setHero] = useState();
	const [form] = Form.useForm();
	const params = useParams();
	const attributes = useSelector(HeroRedux.redux.attributes.selector.getPayload);
	const errors = useSelector(HeroRedux.redux.update.selector.getError);
	useHeroAttributes();

	useHeroFetch(params.hero, hero => {
		setHero(hero);
		values(form, hero);
	});

	return (
		<Form
			form={form}
			name={"hero"}
			autoComplete="off"
			onFinish={values => {
				dispatch(HeroRedux.redux.update.dispatch.update({...values, id: params.hero})).then(_ => {
					message.success(t("root.hero.update.success"));
					setEdit(false);
				}, () => {
					message.error(t("root.hero.update.error"));
				});
			}}
		>
			<BaseDashboardView
				base={HeroContextView}
				id={"root.heroContext"}
				open={["root.hero", "root.hero"]}
				icon={<Spinner icon={<HeroIcon/>} enable={hero}/>}
				title={
					<Centered span={12}>
						<Form.Item
							{...validationFor("name", errors, t)}
							name={"name"}
							rules={[
								{
									required: true,
									message: t("root.hero.form.name.required"),
								}
							]}
							children={<Input disabled={!edit} addonBefore={t("root.hero.form.name.label")} suffix={<HeroIcon/>}/>}
						/>
					</Centered>
				}
				subTitle={<EditSubmitButtons initials={hero} edit={edit} setEdit={setEdit} form={form} translation={"root.hero"}/>}
			>
				<DualSection
					left={
						<Centered span={24}>
							<AttributeFieldEditor edit={edit} translation={"root.hero"} attributes={attributes}/>
						</Centered>
					}
					right={<BulletCard translation={"root.hero.dashboard"} count={4}/>}
				/>
			</BaseDashboardView>
		</Form>
	);
};

export default DashboardView;
