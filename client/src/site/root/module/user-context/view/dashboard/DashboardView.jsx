import {Form, Input, message} from "antd";
import BulletCard from "component/BulletCard";
import Spinner from "component/icon/Spinner";
import Centered from "component/layout/Centered";
import DualSection from "component/layout/DualSection";
import BaseDashboardView from "component/view/BaseDashboardView";
import {useState} from "react";
import {useTranslation} from "react-i18next";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router";
import UserRedux from "redux/user/redux";
import UserContextView from "site/root/module/user-context/view/UserContextView";
import UserIcon from "site/root/module/user/component/icon/UserIcon";
import useUserFetch from "site/root/module/user/hook/useUserFetch";
import validationFor from "utils/form/validationFor";
import values from "utils/form/values";

const DashboardView = () => {
	const dispatch = useDispatch();
	const {t} = useTranslation();
	const [edit, setEdit] = useState(false);
	const [user, setUser] = useState();
	const [form] = Form.useForm();
	const params = useParams();
	const errors = useSelector(UserRedux.redux.update.selector.getError);
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
				dispatch(UserRedux.redux.update.dispatch.update({...values, id: params.user})).then(_ => {
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
			>
				<DualSection
					left={<h1>rest of edit form here</h1>}
					right={<BulletCard translation={"user:dashboard."} count={4}/>}
				/>
			</BaseDashboardView>
		</Form>
	);
};

export default DashboardView;
