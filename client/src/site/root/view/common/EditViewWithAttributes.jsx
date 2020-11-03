import {Card, Divider, Form, Input, message, Result} from "antd";
import BulletCard from "component/BulletCard";
import EditorContext from "component/form/EditorContext";
import EditSubmitButtons from "component/form/EditSubmitButtons";
import Spinner from "component/icon/Spinner";
import Centered from "component/layout/Centered";
import DualSection from "component/layout/DualSection";
import useMenuSelect from "hook/useMenuSelect";
import PropTypes from "prop-types";
import {useContext, useEffect, useState} from "react";
import {useTranslation} from "react-i18next";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router";
import AttributeFieldEditor from "site/root/component/AttributeFieldEditor";
import validationFor from "utils/form/validationFor";
import values from "utils/form/values";

const EditViewWithAttributes = (
	{
		context,
		param,
		enableSubmit,
		children,
	}) => {
	context = useContext(context);
	const dispatch = useDispatch();
	const {t} = useTranslation();
	const [data, setData] = useState();
	const [form] = Form.useForm();
	const params = useParams();
	const redux = context.redux;
	const id = context.id;
	const icon = context.icon;
	const attributes = useSelector(redux.redux.attributes.selector.getPayload);
	const [errors, setErrors] = useState();
	const [editor, setEditor] = useState(false);

	useMenuSelect(id);

	/**
	 * Fetch attributes from redux.
	 */
	useEffect(() => {
		dispatch(redux.redux.attributes.dispatch.attributes());
	}, [dispatch, redux.redux.attributes.dispatch]);

	/**
	 * Fetch current data from redux.
	 */
	useEffect(() => dispatch(redux.redux.fetch.dispatch.fetch(params[param])).then(data => {
		setData(data);
		values(form, data);
	}), [dispatch, form, param, params, redux.redux.fetch.dispatch]);

	return (
		<EditorContext.Provider value={{errors, setErrors, editor, setEditor}}>
			<Form
				form={form}
				name={context.id}
				autoComplete="off"
				onFinish={values => {
					dispatch(redux.redux.update.dispatch.update({...values, id: params[param]})).then(_ => {
						message.success(t(id + ".update.success"));
						setEditor(false);
						setData(values);
						setErrors(null);
					}, error => {
						message.error(t(id + ".update.error"));
						setErrors(error);
					});
				}}
			>
				<Card title={t(`${id}.title`)}>
					<Result
						status={"info"}
						title={
							<EditSubmitButtons
								enableSubmit={enableSubmit}
								initials={data}
								form={form}
								translation={id}
								param={param}
								redux={redux}
							/>
						}
						subTitle={
							<Centered span={12}>
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
									children={<Input disabled={!editor} addonBefore={t(id + ".form.name.label")} suffix={icon}/>}
								/>
							</Centered>
						}
						icon={<Spinner icon={icon} enable={data}/>}
					>
						<DualSection
							left={
								<Centered span={24}>
									{children}
									<AttributeFieldEditor edit={editor} translation={id} attributes={attributes}/>
								</Centered>
							}
							right={<BulletCard translation={id + ".dashboard"} count={4}/>}
						/>
					</Result>
				</Card>
			</Form>
		</EditorContext.Provider>
	);
};

EditViewWithAttributes.propTypes = {
	param: PropTypes.string.isRequired,
	enableSubmit: PropTypes.any.isRequired,
};

export default EditViewWithAttributes;
