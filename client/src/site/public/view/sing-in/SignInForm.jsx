import {Button, Form, Input, message} from "antd";
import SignInIcon from "component/icon/SignInIcon";
import Centered from "component/layout/Centered";
import DiscoveryContext from "component/system/DiscoveryContext";
import SessionContext from "component/system/SessionContext";
import {useContext, useState} from "react";
import {useTranslation} from "react-i18next";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router";
import {LoadingRedux} from "redux/loading/redux";
import {doUserLogin} from "site/public/redux/user/redux";
import Events from "utils/Events";
import enableSubmit from "utils/form/enableSubmit";
import validationFor from "utils/form/validationFor";

const SignInForm = () => {
	const {t} = useTranslation();
	const [errors, setErrors] = useState();
	const dispatch = useDispatch();
	const discoveryContext = useContext(DiscoveryContext);
	const sessionContext = useContext(SessionContext);
	const [form] = Form.useForm();
	const navigate = useNavigate();
	return (
		<Form
			form={form}
			onFinish={values => {
				dispatch(LoadingRedux.start());
				doUserLogin(
					discoveryContext,
					values,
					Events()
						.on("success", data => {
							sessionContext.open(data);
							dispatch(LoadingRedux.finish());
						})
						.on("error", () => {
							dispatch(LoadingRedux.finish());
							message.error(t("public.sign-in.general-error"));
						})
						.on("http-403", data => {
							setErrors(data);
							dispatch(LoadingRedux.finish());
						}),
					navigate,
				);
			}}
			name={"sign-in"}
		>
			<Form.Item
				name={"login"}
				{...validationFor("login", errors, t)}
				rules={[
					{
						required: true,
						message: t("public.sign-in.form.login.required")
					}
				]}
				children={<Input addonBefore={<div style={{width: "120px"}}>{t("public.sign-in.form.login.label")}</div>}/>}
			/>
			<Form.Item
				name={"password"}
				{...validationFor("password", errors, t)}
				rules={[
					{
						required: true,
						message: t("public.sign-in.form.password.required")
					}
				]}
				children={<Input.Password addonBefore={<div style={{width: "120px"}}>{t("public.sign-in.form.password.label")}</div>}/>}
			/>
			<Centered>
				<Form.Item shouldUpdate>
					{() => (
						<Button
							type="primary"
							htmlType="submit"
							icon={<SignInIcon/>}
							disabled={!enableSubmit(form, true)}
							children={t("public.sign-in.form.submit.label")}
						/>
					)}
				</Form.Item>
			</Centered>
		</Form>
	);
};

export default SignInForm;
