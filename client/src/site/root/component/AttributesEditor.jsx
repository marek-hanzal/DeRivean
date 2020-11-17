import {Card, Divider, message, Result} from "antd";
import {DiscoveryContext} from "component/discovery/Discovery";
import BaseEditor from "component/form/BaseEditor";
import EditorContext from "component/form/EditorContext";
import EditorToolbar from "component/form/EditorToolbar";
import AttributeIcon from "component/icon/AttributeIcon";
import Spinner from "component/icon/Spinner";
import {LayoutContext} from "component/layout/BaseLayout";
import Centered from "component/layout/Centered";
import ModuleContext from "component/ModuleContext";
import BackLink from "component/route/BackLink";
import {useContext} from "react";
import {useTranslation} from "react-i18next";
import {useNavigate, useParams} from "react-router";
import AttributeFieldEditor from "site/root/component/AttributeFieldEditor";
import Events from "utils/Events";
import values from "utils/form/values";

const AttributeForm = ({groups}) => {
	const {t} = useTranslation();
	const editorContext = useContext(EditorContext);
	const moduleContext = useContext(ModuleContext);
	const layoutContext = useContext(LayoutContext);
	const navigate = useNavigate();
	const params = useParams();
	moduleContext.fetch(
		params[moduleContext.param],
		Events()
			.on("success", fetch => {
				editorContext.setInitials(fetch);
				values(editorContext.form, editorContext.inputMapper(fetch));
				editorContext.setEnableSubmit(true);
				layoutContext.setFetch(fetch);
				editorContext.isReady();
			}),
		navigate,
	);
	return (
		<Card title={<><BackLink/>{t(`${moduleContext.id}.attributes.title`)}</>}>
			<Result
				icon={<Spinner icon={<AttributeIcon/>} done={!editorContext.ready}/>}
				title={
					<>
						<EditorToolbar param={moduleContext.param}/>
						<Divider type={"horizontal"}/>
					</>
				}
				subTitle={t(`${moduleContext.id}.attributes.subtitle`)}
				children={
					<Centered span={16}>
						<AttributeFieldEditor groups={groups}/>
					</Centered>
				}
			/>
		</Card>
	);
};

const AttributesEditor = (
	{
		groups,
		children = children => children,
	}) => {
	const {t} = useTranslation();
	const discoveryContext = useContext(DiscoveryContext);
	const layoutContext = useContext(LayoutContext);
	const moduleContext = useContext(ModuleContext);
	const navigate = useNavigate();
	return (
		<BaseEditor
			readyCount={2}
			inputMapper={values => {
				if (!values) {
					return values;
				}
				return {
					...values, attributes: values.attributes.map(attribute => ({...attribute, type: [attribute.type.group.id, attribute.type.id]}))
				};
			}}
			outputMapper={values => ({...values, attributes: values.attributes.map(attribute => ({...attribute, type: attribute.type.id || attribute.type[attribute.type.length - 1]}))})}
			onFinish={(values, initials, editor) => {
				layoutContext.loadingStart();
				values = {id: initials.id, ...values};
				moduleContext.update(
					discoveryContext,
					values,
					Events()
						.on("success", () => {
							message.success(t(`${moduleContext.id}.attributes.updated`));
							editor.setEditor(false);
							editor.setInitials(values);
						})
						.on("error", () => {
							message.success(t(`${moduleContext.id}.attributes.update-failed`));
						})
						.on("done", () => {
							layoutContext.loadingFinish();
						}),
					navigate,
				);
			}}
			name={moduleContext.id}
			translation={moduleContext.id}
			children={
				children(<AttributeForm groups={groups}/>)
			}
		/>
	);
};

export default AttributesEditor;
