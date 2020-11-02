import {Divider, Form, Input, message} from "antd";
import BulletCard from "component/BulletCard";
import EditSubmitButtons from "component/form/EditSubmitButtons";
import EditIcon from "component/icon/EditIcon";
import Spinner from "component/icon/Spinner";
import Centered from "component/layout/Centered";
import DualSection from "component/layout/DualSection";
import BaseDashboardView from "component/view/BaseDashboardView";
import PropTypes from "prop-types";
import {useEffect, useState} from "react";
import {useTranslation} from "react-i18next";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router";
import AttributeFieldEditor from "site/root/component/AttributeFieldEditor";
import RootView from "site/root/view/RootView";
import validationFor from "utils/form/validationFor";
import values from "utils/form/values";

const EditViewWithAttributes = (
	{
		id,
		formName,
		redux,
		param,
		open,
		menu,
		enableSubmit,
		icon = <EditIcon/>,
	}) => {
	const dispatch = useDispatch();
	const {t} = useTranslation();
	const [edit, setEdit] = useState(false);
	const [data, setData] = useState();
	const [form] = Form.useForm();
	const params = useParams();
	const attributes = useSelector(redux.redux.attributes.selector.getPayload);
	const errors = useSelector(redux.redux.update.selector.getError);

	useEffect(() => {
		dispatch(redux.redux.attributes.dispatch.attributes());
	}, [dispatch, redux.redux.attributes.dispatch]);
	useEffect(() => dispatch(redux.redux.fetch.dispatch.fetch(params[param])).then(data => {
		setData(data);
		values(form, data);
	}), [dispatch, form, param, params, redux.redux.fetch.dispatch]);

	return (
		<Form
			form={form}
			name={formName}
			autoComplete="off"
			onFinish={values => {
				dispatch(redux.redux.update.dispatch.update({...values, id: params[param]})).then(_ => {
					message.success(t(id + ".update.success"));
					setEdit(false);
					setData(values);
				}, () => {
					message.error(t(id + ".update.error"));
				});
			}}
		>
			<BaseDashboardView
				base={RootView}
				id={id}
				open={open}
				menu={menu}
				icon={<Spinner icon={icon} enable={data}/>}
				title={<EditSubmitButtons enableSubmit={enableSubmit} initials={data} edit={edit} setEdit={setEdit} form={form} translation={id}/>}
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
							children={<Input disabled={!edit} addonBefore={t(id + ".form.name.label")} suffix={icon}/>}
						/>
					</Centered>
				}
			>
				<DualSection
					left={
						<Centered span={24}>
							<AttributeFieldEditor edit={edit} translation={id} attributes={attributes}/>
						</Centered>
					}
					right={<BulletCard translation={id + ".dashboard"} count={4}/>}
				/>
			</BaseDashboardView>
		</Form>
	);
};

EditViewWithAttributes.propTypes = {
	id: PropTypes.string.isRequired,
	formName: PropTypes.string.isRequired,
	redux: PropTypes.object.isRequired,
	param: PropTypes.string.isRequired,
	open: PropTypes.any.isRequired,
	enableSubmit: PropTypes.any.isRequired,
	menu: PropTypes.string,
	icon: PropTypes.element,
};

export default EditViewWithAttributes;
