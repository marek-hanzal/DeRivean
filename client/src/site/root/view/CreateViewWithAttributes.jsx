import {Form, Input, message} from "antd";
import BulletCard from "component/BulletCard";
import CreateSubmitButtons from "component/form/CreateSubmitButtons";
import Centered from "component/layout/Centered";
import DualSection from "component/layout/DualSection";
import BaseCreateView from "component/view/BaseCreateView";
import {useEffect, useState} from "react";
import {useTranslation} from "react-i18next";
import {useDispatch, useSelector} from "react-redux";
import {useLocation, useNavigate, useParams} from "react-router";
import SessionRedux from "redux/session/redux";
import AttributeFieldEditor from "site/root/component/AttributeFieldEditor";
import validationFor from "utils/form/validationFor";

const CreateViewWithAttributes = (
	{
		id,
		base,
		formName,
		redux,
		icon,
		param,
		dashboardLink,
	}) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const location = useLocation();
	const params = useParams();
	const history = useSelector(SessionRedux.selector.getHistory);
	const [form] = Form.useForm();
	const {t} = useTranslation();
	const [errors, setErrors] = useState();
	const isLoading = useSelector(redux.redux.attributes.selector.isLoading);
	const attributes = useSelector(redux.redux.attributes.selector.getPayload);
	useEffect(() => {
		dispatch(redux.redux.attributes.dispatch.attributes());
	}, [dispatch]);

	return (
		<Form
			form={form}
			name={formName}
			autoComplete="off"
			onFinish={values => {
				dispatch(redux.redux.create.dispatch.create({...values, ...{[param]: params[param]}})).then(entity => {
					message.success(t(id + ".create.message.success"));
					history.push(location.pathname);
					dispatch(SessionRedux.history(history));
					navigate(dashboardLink(entity.id));
				}, (error) => {
					setErrors(error);
					message.error(t(id + ".create.message.error"));
				});
			}}
		>
			<BaseCreateView
				base={base}
				loading={isLoading}
				id={id}
				icon={icon}
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
							children={<Input addonBefore={t(id + ".form.name.label")} suffix={icon}/>}
						/>
					</Centered>
				}
				subTitle={<CreateSubmitButtons onCancel={() => {
					setErrors(null);
				}} form={form} translation={id}/>}
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

export default CreateViewWithAttributes;
