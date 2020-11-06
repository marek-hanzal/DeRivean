import {Card, Divider, Form, Input, message, Result} from "antd";
import BaseEditor from "component/form/BaseEditor";
import CreateSubmitButtons from "component/form/CreateSubmitButtons";
import EditorContext from "component/form/EditorContext";
import Centered from "component/layout/Centered";
import useMenuSelect from "hook/useMenuSelect";
import PropTypes from "prop-types";
import {useContext} from "react";
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
	const {t} = useTranslation();
	useMenuSelect(currentContext.id + ".create");
	return (
		<BaseEditor
			enableEditor={true}
			defaultEnableSubmit={defaultEnableSubmit}
			onFinish={(values, initials, setErrors) => {
				dispatch(currentContext.redux.redux.create.dispatch.create({...values, ...{[param]: params[param]}})).then(entity => {
					message.success(t(currentContext.id + ".create.success"));
					navigate(currentContext.link.home.link(entity.id));
				}, errors => {
					message.error(t(currentContext.id + ".create.error"));
					setErrors(errors);
				});
			}}
			onFinishFailed={() => {
				message.error(t(currentContext.id + ".create.error"));
			}}
			name={currentContext.id}
			translation={currentContext.id}
			children={
				<EditorContext.Consumer>
					{({errors}) => (
						<Card title={t(`${currentContext.id}.create.title`)}>
							<Result
								status={"info"}
								icon={currentContext.icon}
								title={
									<CreateSubmitButtons translation={currentContext.id}/>
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
					)}
				</EditorContext.Consumer>
			}
		/>
	);
};

CommonCreateView.propTypes = {
	param: PropTypes.string.isRequired,
	defaultEnableSubmit: PropTypes.any,
};

export default CommonCreateView;
