import {Divider, Form, Input, message} from "antd";
import BulletCard from "component/BulletCard";
import CreateSubmitButtons from "component/form/CreateSubmitButtons";
import Centered from "component/layout/Centered";
import DualSection from "component/layout/DualSection";
import BaseCreateView from "component/view/BaseCreateView";
import PropTypes from "prop-types";
import {useEffect} from "react";
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
		children,
		errors,
		setErrors,
		initials,
		enableSubmit,
	}) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const location = useLocation();
	const params = useParams();
	const history = useSelector(SessionRedux.selector.getHistory);
	const [form] = Form.useForm();
	const {t} = useTranslation();
	const isLoading = useSelector(redux.redux.attributes.selector.isLoading);
	const attributes = useSelector(redux.redux.attributes.selector.getPayload);
	useEffect(() => {
		dispatch(redux.redux.attributes.dispatch.attributes());
	}, [dispatch, redux.redux.attributes.dispatch]);

	return (
		<Form
			form={form}
			name={formName}
			initialValues={initials}
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
					<CreateSubmitButtons
						enableSubmit={enableSubmit}
						onCancel={() => {
							setErrors(null);
						}}
						form={form}
						translation={id}
					/>
				}
				subTitle={
					<Centered span={12}>
						<Divider type={"horizontal"}/>
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
			>
				<DualSection
					left={
						<Centered span={24}>
							{children}
							<AttributeFieldEditor edit={true} translation={id} attributes={attributes}/>
						</Centered>
					}
					right={<BulletCard translation={id + ".create"} count={4}/>}
				/>
			</BaseCreateView>
		</Form>
	);
};

CreateViewWithAttributes.propTypes = {
	id: PropTypes.string.isRequired,
	base: PropTypes.func.isRequired,
	formName: PropTypes.string.isRequired,
	redux: PropTypes.object.isRequired,
	icon: PropTypes.element,
	param: PropTypes.string.isRequired,
	dashboardLink: PropTypes.func.isRequired,
	enableSubmit: PropTypes.any.isRequired,
};

export default CreateViewWithAttributes;
