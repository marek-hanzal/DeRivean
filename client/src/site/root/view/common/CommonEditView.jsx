import {Card, Divider, Form, Input, message, Result} from "antd";
import axios from "axios";
import BaseEditor from "component/form/BaseEditor";
import EditorContext from "component/form/EditorContext";
import EditorToolbar from "component/form/EditorToolbar";
import Spinner from "component/icon/Spinner";
import Centered from "component/layout/Centered";
import useMenuSelect from "hook/useMenuSelect";
import {useContext, useEffect} from "react";
import {useTranslation} from "react-i18next";
import {useDispatch} from "react-redux";
import {useParams} from "react-router";
import validationFor from "utils/form/validationFor";
import values from "utils/form/values";

const Editor = ({currentContext, param, children, name}) => {
	const {t} = useTranslation();
	const dispatch = useDispatch();
	const params = useParams();
	const editorContext = useContext(EditorContext);
	useEffect(() => {
		const cancelToken = axios.CancelToken.source();
		dispatch(currentContext.redux.redux.fetch.dispatch.fetch(params[param], cancelToken)).then(data => {
			editorContext.setInitials(data);
			values(editorContext.form, data);
			editorContext.setEditor(false);
			editorContext.isReady();
		}, () => {
		});
		return () => cancelToken.cancel();
		// eslint-disable-next-line
	}, [dispatch, param, params]);
	return (
		<Card title={t(`${currentContext.id}.title`)}>
			<Result
				status={"info"}
				title={
					<EditorToolbar
						translation={currentContext.id}
						param={param}
						redux={currentContext.redux}
						deletedLink={currentContext.link.dashboard}
					/>
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
									message: t(`${currentContext.id}.form.${name}.required`),
								}
							]}
							children={<Input disabled={!editorContext.editor} addonBefore={t(`${currentContext.id}.form.${name}.label`)} suffix={currentContext.icon}/>}
						/>
					</Centered>
				}
				icon={<Spinner icon={currentContext.icon} done={!editorContext.ready}/>}
				children={<Centered span={16} children={children}/>}
			/>
		</Card>
	);
};

const CommonEditView = (
	{
		context,
		readyCount,
		param,
		name,
		defaultEnableSubmit,
		children,
	}) => {
	const currentContext = useContext(context);
	const dispatch = useDispatch();
	const {t} = useTranslation();
	const params = useParams();
	useMenuSelect(currentContext.id + ".edit");
	return (
		<BaseEditor
			readyCount={readyCount}
			defaultEnableSubmit={defaultEnableSubmit}
			onFinish={(data, initials, editor) => {
				dispatch(currentContext.redux.redux.update.dispatch.update({...data, id: params[param]})).then(data => {
					message.success(t(currentContext.id + ".update.success"));
					editor.setEditor(false);
					editor.setErrors(null);
					editor.setInitials(data);
					values(editor.form, data);
				}, error => {
					message.error(t(currentContext.id + ".update.error"));
					editor.setErrors(error);
				});
			}}
			onFinishFailed={() => {
				message.error(t(currentContext.id + ".update.error"));
			}}
			name={currentContext.id}
			translation={currentContext.id}
			children={<Editor name={name || "name"} param={param} currentContext={currentContext} children={children}/>}
		/>
	);
};

export default CommonEditView;
