import {Card, Divider, message, Result} from "antd";
import BaseEditor from "component/form/BaseEditor";
import EditorContext from "component/form/EditorContext";
import EditorToolbar from "component/form/EditorToolbar";
import AttributeIcon from "component/icon/AttributeIcon";
import Spinner from "component/icon/Spinner";
import Centered from "component/layout/Centered";
import BackLink from "component/route/BackLink";
import {useContext} from "react";
import {useTranslation} from "react-i18next";
import {useDispatch, useStore} from "react-redux";
import {useParams} from "react-router";
import {LoadingRedux} from "redux/loading/redux";
import AttributeFieldEditor from "site/root/component/AttributeFieldEditor";
import values from "utils/form/values";

const AttributeForm = ({currentContext}) => {
	const {t} = useTranslation();
	const editorContext = useContext(EditorContext);
	const params = useParams();
	currentContext.fetch(params[currentContext.param], fetch => {
		editorContext.setInitials(fetch);
		values(editorContext.form, fetch);
		editorContext.setEnableSubmit(true);
		editorContext.isReady();
	});
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
	const dispatch = useDispatch();
	const {t} = useTranslation();
	const store = useStore();
	return (
		<BaseEditor
			readyCount={2}
			onFinish={(values, initials, editor) => {
				dispatch(LoadingRedux.start());
				values = {id: initials.id, ...values};
				currentContext.update(
					store.getState(),
					values,
					() => {
						message.success(t(`${currentContext.id}.attributes.updated`));
						editor.setEditor(false);
						editor.setInitials(values);
						dispatch(LoadingRedux.finish());
					},
					() => {
						message.success(t(`${currentContext.id}.attributes.update-failed`));
						dispatch(LoadingRedux.finish());
					}
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
