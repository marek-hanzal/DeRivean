import {Card, Divider, message, Result} from "antd";
import {DiscoveryContext} from "component/discovery/Discovery";
import BaseEditor from "component/form/BaseEditor";
import EditorContext from "component/form/EditorContext";
import EditorToolbar from "component/form/EditorToolbar";
import AttributeIcon from "component/icon/AttributeIcon";
import Spinner from "component/icon/Spinner";
import {LayoutContext} from "component/layout/BaseLayout";
import Centered from "component/layout/Centered";
import BackLink from "component/route/BackLink";
import {useContext} from "react";
import {useTranslation} from "react-i18next";
import {useParams} from "react-router";
import AttributeFieldEditor from "site/root/component/AttributeFieldEditor";
import Events from "utils/Events";
import values from "utils/form/values";

const AttributeForm = ({currentContext}) => {
	const {t} = useTranslation();
	const editorContext = useContext(EditorContext);
	const params = useParams();
	currentContext.fetch(
		params[currentContext.param],
		Events()
			.on("success", fetch => {
				editorContext.setInitials(fetch);
				values(editorContext.form, fetch);
				editorContext.setEnableSubmit(true);
				editorContext.isReady();
			})
	);
	return (
		<Card title={<><BackLink/>{t(`${currentContext.id}.attributes.title`)}</>}>
			<Result
				icon={<Spinner icon={<AttributeIcon/>} done={!editorContext.ready}/>}
				title={
					<>
						<EditorToolbar param={currentContext.param} currentContext={currentContext}/>
						<Divider type={"horizontal"}/>
					</>
				}
				subTitle={t(`${currentContext.id}.attributes.subtitle`)}
				children={
					<Centered span={16}>
						<AttributeFieldEditor currentContext={currentContext}/>
					</Centered>
				}
			/>
		</Card>
	);
};

const AttributesEditor = ({currentContext}) => {
	const {t} = useTranslation();
	const discoveryContext = useContext(DiscoveryContext);
	const layoutContext = useContext(LayoutContext);
	return (
		<BaseEditor
			readyCount={2}
			onFinish={(values, initials, editor) => {
				layoutContext.loadingStart();
				values = {id: initials.id, ...values};
				currentContext.update(
					discoveryContext,
					values,
					Events()
						.on("success", () => {
							message.success(t(`${currentContext.id}.attributes.updated`));
							editor.setEditor(false);
							editor.setInitials(values);
						})
						.on("error", () => {
							message.success(t(`${currentContext.id}.attributes.update-failed`));
						})
						.on("done", () => {
							layoutContext.loadingFinish();
						})
				);
			}}
			name={currentContext.id}
			translation={currentContext.id}
			children={
				<AttributeForm currentContext={currentContext}/>
			}
		/>
	);
};

export default AttributesEditor;
