import {Card, Divider, Form, Input, message, Result} from "antd";
import {DiscoveryContext} from "component/discovery/Discovery";
import BaseEditor from "component/form/BaseEditor";
import CreateSubmitButtons from "component/form/CreateSubmitButtons";
import EditorContext from "component/form/EditorContext";
import {LayoutContext} from "component/layout/BaseLayout";
import Centered from "component/layout/Centered";
import ModuleContext from "component/ModuleContext";
import BackLink from "component/route/BackLink";
import PropTypes from "prop-types";
import {useContext} from "react";
import {useTranslation} from "react-i18next";
import {useNavigate, useParams} from "react-router";
import Events from "utils/Events";
import validationFor from "utils/form/validationFor";

const CommonCreateView = (
	{
		param,
		children,
		readyCount,
		name,
		defaultEnableSubmit,
	}) => {
	name = name || "name";
	const moduleContext = useContext(ModuleContext);
	const discoveryContext = useContext(DiscoveryContext);
	const layoutContext = useContext(LayoutContext);
	const navigate = useNavigate();
	const params = useParams();
	const {t} = useTranslation();
	layoutContext.useMenuSelect(moduleContext.id + ".create");
	param = param || moduleContext.param;
	return (
		<BaseEditor
			enableEditor={true}
			readyCount={readyCount}
			defaultEnableSubmit={defaultEnableSubmit}
			onFinish={(values, initials, editor) => {
				layoutContext.loadingStart();
				moduleContext.create(
					discoveryContext,
					{...values, ...{[param]: params[param]}},
					Events()
						.on("success", entity => {
							message.success(t(moduleContext.id + ".create.success"));
							navigate(moduleContext.link.home.link(entity.id));
						})
						.on("error", () => {
							message.error(t(moduleContext.id + ".create.general-error"));
						})
						.on("http-409", error => {
							message.error(t(moduleContext.id + ".create.conflict"));
							editor.setErrors(error);
						})
						.on("http-429", () => {
							message.error(t(moduleContext.id + ".create.resource-limit"));
						})
						.on("done", () => {
							layoutContext.loadingFinish();
						}),
					navigate,
				);
			}}
			onFinishFailed={() => {
				message.error(t(moduleContext.id + ".create.error"));
			}}
			name={moduleContext.id}
			translation={moduleContext.id}
			children={
				<EditorContext.Consumer>
					{({errors}) => (
						<Card title={<><BackLink/>{t(`${moduleContext.id}.create.title`)}</>}>
							<Result
								status={"info"}
								icon={moduleContext.icon}
								title={
									<CreateSubmitButtons translation={moduleContext.id}/>
								}
								subTitle={<Centered span={12}>
									<Divider type={"horizontal"}/>
									<Form.Item
										{...validationFor(name, errors, t)}
										name={name}
										rules={[
											{
												required: true,
												message: t(`${moduleContext.id}.form.${name}.required`),
											}
										]}
										children={<Input addonBefore={t(`${moduleContext.id}.form.${name}.label`)} suffix={moduleContext.icon}/>}
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
	readyCount: PropTypes.number,
	defaultEnableSubmit: PropTypes.any,
};

export default CommonCreateView;
