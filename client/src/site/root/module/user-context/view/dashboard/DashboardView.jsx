import {Form, Input, message} from "antd";
import Spinner from "component/icon/Spinner";
import Centered from "component/layout/Centered";
import BaseDashboardView from "component/view/BaseDashboardView";
import {useState} from "react";
import {useTranslation} from "react-i18next";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router";
import UserUpdateRedux from "redux/user/update/redux";
import UserContextView from "site/root/module/user-context/view/UserContextView";
import UserIcon from "site/root/module/user/component/icon/UserIcon";
import useUserFetch from "site/root/module/user/hook/useUserFetch";
import validationFor from "utils/form/validationFor";
import values from "utils/form/values";

const DashboardView = () => {
	const dispatch = useDispatch();
	const {t} = useTranslation(["user", "common"]);
	const [edit, setEdit] = useState(false);
	const [user, setUser] = useState();
	const [form] = Form.useForm();
	const params = useParams();
	const errors = useSelector(UserUpdateRedux.selector.getError);
	useUserFetch(params.user, (user) => {
		setUser(user);
		values(form, user);
	});
	return (
		<Form
			form={form}
			name={"kingdom"}
			autoComplete="off"
			onFinish={values => {
				dispatch(UserUpdateRedux.update({...values, id: params.user})).then(_ => {
					message.success(t("user:update.success"));
					setEdit(false);
				}, () => {
					message.error(t("user:update.error"));
				});
			}}
		>
			<BaseDashboardView
				base={UserContextView}
				id={"root.userContext"}
				open={["root.kingdom"]}
				icon={<Spinner icon={<UserIcon/>} enable={user}/>}
				title={
					<Centered span={12}>
						<Form.Item
							{...validationFor("name", errors, t)}
							name={"name"}
							rules={[
								{
									required: true,
									message: t("user:form.name.required"),
								}
							]}
							children={<Input disabled={!edit} addonBefore={t("user:form.name.label")} suffix={<UserIcon/>}/>}
						/>
					</Centered>
				}
			/>
		</Form>
	);
};

export default DashboardView;
