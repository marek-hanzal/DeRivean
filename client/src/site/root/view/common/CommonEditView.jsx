import {Card, Divider, Form, Input, message, Result} from "antd";
import EditorContext from "component/form/EditorContext";
import EditSubmitButtons from "component/form/EditSubmitButtons";
import Spinner from "component/icon/Spinner";
import Centered from "component/layout/Centered";
import useMenuOpen from "hook/useMenuOpen";
import useMenuSelect from "hook/useMenuSelect";
import {useContext, useEffect, useState} from "react";
import {useTranslation} from "react-i18next";
import {useDispatch} from "react-redux";
import {useParams} from "react-router";
import validationFor from "utils/form/validationFor";
import values from "utils/form/values";

const CommonEditView = (
	{
		context,
		param,
		enableSubmit,
		name,
		children,
	}) => {
	name = name || "name";
	const currentContext = useContext(context);
	const dispatch = useDispatch();
	const {t} = useTranslation();
	const [data, setData] = useState();
	const [form] = Form.useForm();
	const params = useParams();
	const [errors, setErrors] = useState();
	const [editor, setEditor] = useState(false);

	useMenuOpen(currentContext.id);
	useMenuSelect(currentContext.id + ".edit");

	/**
	 * Fetch current data from redux.
	 */
	useEffect(() => dispatch(currentContext.redux.redux.fetch.dispatch.fetch(params[param])).then(data => {
		setData(data);
		values(form, data);
	}), [dispatch, form, param, params, currentContext.redux.redux.fetch.dispatch]);

	return (
		<EditorContext.Provider value={{errors, setErrors, editor, setEditor}}>
			<Form
				form={form}
				name={currentContext.id}
				autoComplete="off"
				onFinish={data => {
					dispatch(currentContext.redux.redux.update.dispatch.update({...data, id: params[param]})).then(data => {
						message.success(t(currentContext.id + ".update.success"));
						setEditor(false);
						setErrors(null);
						setData(data);
						values(form, data);
					}, error => {
						message.error(t(currentContext.id + ".update.error"));
						setErrors(error);
					});
				}}
				onFinishFailed={() => {
					message.error(t(currentContext.id + ".update.error"));
				}}
			>
				<Card title={t(`${currentContext.id}.title`)}>
					<Result
						status={"info"}
						title={
							<EditSubmitButtons
								enableSubmit={enableSubmit}
								initials={data}
								form={form}
								translation={currentContext.id}
								param={param}
								redux={currentContext.redux}
							/>
						}
						subTitle={
							<Centered span={12}>
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
									children={<Input disabled={!editor} addonBefore={t(`${currentContext.id}.form.${name}.label`)} suffix={currentContext.icon}/>}
								/>
							</Centered>
						}
						icon={<Spinner icon={currentContext.icon} done={data}/>}
						children={<Centered span={16} children={children}/>}
					/>
				</Card>
			</Form>
		</EditorContext.Provider>
	);
};

export default CommonEditView;
