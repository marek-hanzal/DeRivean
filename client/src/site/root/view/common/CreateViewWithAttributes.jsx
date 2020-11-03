import {Card, Divider, Form, Input, message, Result} from "antd";
import BulletCard from "component/BulletCard";
import CreateSubmitButtons from "component/form/CreateSubmitButtons";
import EditorContext from "component/form/EditorContext";
import Centered from "component/layout/Centered";
import DualSection from "component/layout/DualSection";
import useMenuOpen from "hook/useMenuOpen";
import useMenuSelect from "hook/useMenuSelect";
import PropTypes from "prop-types";
import {useContext, useEffect, useState} from "react";
import {useTranslation} from "react-i18next";
import {useDispatch, useSelector} from "react-redux";
import {useLocation, useNavigate, useParams} from "react-router";
import {SessionRedux} from "redux/session/redux";
import AttributeFieldEditor from "site/root/component/AttributeFieldEditor";
import validationFor from "utils/form/validationFor";

const CreateViewWithAttributes = (
	{
		context,
		param,
		children,
		enableSubmit,
	}) => {
	context = useContext(context);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const location = useLocation();
	const params = useParams();
	const history = useSelector(SessionRedux.selector.getHistory);
	const [form] = Form.useForm();
	const {t} = useTranslation();
	const redux = context.redux;
	const id = context.id;
	const attributes = useSelector(redux.redux.attributes.selector.getPayload);
	const [errors, setErrors] = useState();
	const [editor, setEditor] = useState(true);
	useMenuOpen(id);
	useMenuSelect(id + ".create");

	/**
	 * Fetch attributes used in editor.
	 */
	useEffect(() => {
		dispatch(redux.redux.attributes.dispatch.attributes());
	}, [dispatch, redux.redux.attributes.dispatch]);

	return (
		<EditorContext.Provider value={{errors, setErrors, editor, setEditor}}>
			<Form
				form={form}
				name={context.id}
				autoComplete="off"
				scrollToFirstError
				onFinish={values => {
					dispatch(redux.redux.create.dispatch.create({...values, ...{[param]: params[param]}})).then(entity => {
						message.success(t(id + ".create.success"));
						history.push(location.pathname);
						dispatch(SessionRedux.history(history));
						navigate(context.link.home(entity.id));
					}, errors => {
						message.error(t(id + ".create.error"));
						setErrors(errors);
					});
				}}
				onFinishFailed={_ => {
					message.error(t(id + ".create.error"));
				}}
			>
				<Card title={t(`${id}.create.title`)}>
					<Result
						status={"info"}
						icon={context.icon}
						title={
							<CreateSubmitButtons
								enableSubmit={enableSubmit}
								form={form}
								translation={id}
							/>
						}
						subTitle={<Centered span={12}>
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
								children={<Input addonBefore={t(id + ".form.name.label")} suffix={context.icon}/>}
							/>
						</Centered>}
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
					</Result>
				</Card>
			</Form>
		</EditorContext.Provider>
	);
};

CreateViewWithAttributes.propTypes = {
	param: PropTypes.string.isRequired,
	enableSubmit: PropTypes.any,
};

export default CreateViewWithAttributes;
