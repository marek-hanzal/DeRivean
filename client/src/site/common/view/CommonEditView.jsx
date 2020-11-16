import {Card, Divider, Form, Input, message, Result} from "antd";
import {DiscoveryContext} from "component/discovery/Discovery";
import BaseEditor from "component/form/BaseEditor";
import EditorContext from "component/form/EditorContext";
import EditorToolbar from "component/form/EditorToolbar";
import Spinner from "component/icon/Spinner";
import {LayoutContext} from "component/layout/BaseLayout";
import Centered from "component/layout/Centered";
import ModuleContext from "component/ModuleContext";
import BackLink from "component/route/BackLink";
import {useContext} from "react";
import {useTranslation} from "react-i18next";
import {useNavigate, useParams} from "react-router";
import Events from "utils/Events";
import validationFor from "utils/form/validationFor";
import values from "utils/form/values";

const Editor = (
	{
		children,
		name,
	}) => {
	const {t} = useTranslation();
	const params = useParams();
	const editorContext = useContext(EditorContext);
	const moduleContext = useContext(ModuleContext);
	const layoutContext = useContext(LayoutContext);
	moduleContext.fetch(
		params[moduleContext.param],
		Events()
			.on("success", data => {
				editorContext.setInitials(data);
				values(editorContext.form, editorContext.inputMapper(data));
				editorContext.setEditor(false);
				layoutContext.setFetch(data);
				editorContext.isReady();
			})
	);
	return (
		<Card title={<><BackLink/>{t(`${moduleContext.id}.title`)}</>}>
			<Result
				status={"info"}
				title={
					<EditorToolbar/>
				}
				subTitle={
					<Centered span={12}>
						<Divider type={"horizontal"}/>
						<Form.Item
							{...validationFor(name, editorContext.errors, t)}
							name={name}
							rules={[
								{
									required: true,
									message: t(`${moduleContext.id}.form.${name}.required`),
								}
							]}
							children={<Input disabled={!editorContext.editor} addonBefore={t(`${moduleContext.id}.form.${name}.label`)} suffix={moduleContext.icon}/>}
						/>
					</Centered>
				}
				icon={<Spinner icon={moduleContext.icon} done={!editorContext.ready}/>}
				children={<Centered span={16} children={children}/>}
			/>
		</Card>
	);
};

const CommonEditView = (
	{
		readyCount,
		name,
		defaultEnableSubmit,
		children,
		inputMapper = values => values,
	}) => {
	const moduleContext = useContext(ModuleContext);
	const discoveryContext = useContext(DiscoveryContext);
	const layoutContext = useContext(LayoutContext);
	const navigate = useNavigate();
	const {t} = useTranslation();
	const params = useParams();
	layoutContext.useMenuSelect(moduleContext.id + ".edit");
	const currentInputMapper = values => values ? inputMapper(values) : values;
	return (
		<BaseEditor
			// +1 because this component is doing Fetch (thus marking ready state)
			readyCount={(readyCount || 0) + 1}
			defaultEnableSubmit={defaultEnableSubmit}
			inputMapper={currentInputMapper}
			onFinish={(data, initials, editor) => {
				layoutContext.loadingStart();
				moduleContext.update(
					discoveryContext,
					{...data, id: params[moduleContext.param]},
					Events()
						.on("success", data => {
							message.success(t(moduleContext.id + ".update.success"));
							editor.setEditor(false);
							editor.setErrors(null);
							editor.setInitials(data);
							values(editor.form, currentInputMapper(data));
						})
						.on("error", () => {
							message.error(t(moduleContext.id + ".update.general-error"));
						})
						.on("http-409", error => {
							message.error(t(moduleContext.id + ".update.conflict"));
							editor.setErrors(error);
						})
						.on("done", () => {
							layoutContext.loadingFinish();
						}),
					navigate,
				);
			}}
			onFinishFailed={() => {
				message.error(t(moduleContext.id + ".update.error"));
			}}
			name={moduleContext.id}
			translation={moduleContext.id}
			children={
				<Editor
					name={name || "name"}
					children={children}
				/>}
		/>
	);
};

export default CommonEditView;
