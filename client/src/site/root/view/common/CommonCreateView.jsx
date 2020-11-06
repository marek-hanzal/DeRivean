import {Card, Divider, Form, Input, message, Result} from "antd";
import CreateSubmitButtons from "component/form/CreateSubmitButtons";
import EditorContext from "component/form/EditorContext";
import Centered from "component/layout/Centered";
import useMenuSelect from "hook/useMenuSelect";
import PropTypes from "prop-types";
import {useContext, useState} from "react";
import {useTranslation} from "react-i18next";
import {useDispatch} from "react-redux";
import {useNavigate, useParams} from "react-router";
import validationFor from "utils/form/validationFor";

const CommonCreateView = (
	{
		context,
		param,
		children,
		name,
		defaultEnableSubmit,
	}) => {
	name = name || "name";
	const currentContext = useContext(context);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const params = useParams();
	const [form] = Form.useForm();
	const {t} = useTranslation();
	const [errors, setErrors] = useState();
	const [editor, setEditor] = useState(true);
	const [enableSubmit, setEnableSubmit] = useState(defaultEnableSubmit);
	useMenuSelect(currentContext.id + ".create");
	return (
		<EditorContext.Provider value={{errors, setErrors, editor, setEditor, enableSubmit, setEnableSubmit}}>
			<Form
				form={form}
				name={currentContext.id}
				autoComplete="off"
				scrollToFirstError
				onFinish={values => {
					dispatch(currentContext.redux.redux.create.dispatch.create({...values, ...{[param]: params[param]}})).then(entity => {
						message.success(t(currentContext.id + ".create.success"));
						navigate(currentContext.link.home.link(entity.id));
					}, errors => {
						message.error(t(currentContext.id + ".create.error"));
						setErrors(errors);
					});
				}}
				onFinishFailed={_ => {
					message.error(t(currentContext.id + ".create.error"));
				}}
			>
				<Card title={t(`${currentContext.id}.create.title`)}>
					<Result
						status={"info"}
						icon={currentContext.icon}
						title={
							<CreateSubmitButtons
								enableSubmit={enableSubmit}
								form={form}
								translation={currentContext.id}
							/>
						}
						subTitle={<Centered span={12}>
							<Divider type={"horizontal"}/>
							<Form.Item
								{...validationFor(name, errors, t)}
								name={name}
								rules={[
									{
										required: true,
										message: t(`${currentContext.id}.form.${name}.required`),
									}
								]}
								children={<Input addonBefore={t(`${currentContext.id}.form.${name}.label`)} suffix={currentContext.icon}/>}
							/>
						</Centered>}
						children={<Centered span={16} children={children}/>}
					/>
				</Card>
			</Form>
		</EditorContext.Provider>
	);
};

CommonCreateView.propTypes = {
	param: PropTypes.string.isRequired,
	defaultEnableSubmit: PropTypes.any,
};

export default CommonCreateView;
