import {Button, Form, Input} from "antd";
import SignUpIcon from "component/icon/SignUpIcon";
import Centered from "component/layout/Centered";
import DiscoveryContext from "component/system/DiscoveryContext";
import {useContext, useState} from "react";
import {useTranslation} from "react-i18next";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router";
import {LoadingRedux} from "redux/loading/redux";
import {doUserRegister} from "site/public/redux/user/redux";
import Routes from "site/Routes";
import Events from "utils/Events";
import enableSubmit from "utils/form/enableSubmit";
import validationFor from "utils/form/validationFor";

const SignUpForm = () => {
	const discoveryContext = useContext(DiscoveryContext);
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const {t} = useTranslation();
	const [form] = Form.useForm();
	const [errors, setErrors] = useState();
	return (
		<Form
			labelCol={{span: 6}}
			form={form}
			onFinish={values => {
				dispatch(LoadingRedux.start());
				doUserRegister(
					discoveryContext,
					values,
					Events()
						.on("success", () => {
							navigate(Routes.public.signUpSuccess.link());
							dispatch(LoadingRedux.finish());
						})
						.on("error", () => {
							dispatch(LoadingRedux.finish());
						})
						.on("http-409", data => {
							setErrors(data);
							dispatch(LoadingRedux.finish());
						})
				);
			}}
			name={"sign-up"}
		>
			<Form.Item
				name="name"
				{...validationFor("name", errors, t)}
				rules={[
					{
						required: true,
						message: t("public.sign-up.form.name.required")
					}
				]}
				children={<Input addonBefore={<div style={{width: "120px"}}>{t("public.sign-up.form.name.label")}</div>}/>}
			/>
			<Form.Item
				name="login"
				{...validationFor("login", errors, t)}
				rules={[
					{
						required: true,
						message: t("public.sign-up.form.login.required")
					}
				]}
				children={<Input addonBefore={<div style={{width: "120px"}}>{t("public.sign-up.form.login.label")}</div>}/>}
			/>
			<Form.Item
				name="password"
				{...validationFor("password", errors, t)}
				rules={[
					{
						required: true,
						message: t("public.sign-up.form.password.required")
					}
				]}
				children={<Input.Password addonBefore={<div style={{width: "120px"}}>{t("public.sign-up.form.password.label")}</div>}/>}
			/>
			<Centered>
				<Form.Item shouldUpdate>
					{() => (
						<Button
							type="primary"
							htmlType="submit"
							icon={<SignUpIcon/>}
							disabled={!enableSubmit(form, true)}
							children={t("public.sign-up.form.submit.label")}
						/>
					)}
				</Form.Item>
			</Centered>
		</Form>
	);
};

export default SignUpForm;
