import {Centered, Events, SubmitButton, useAppContext, useLayoutContext} from "@leight-core/leight";
import {Form, Input, message} from "antd";
import {useState} from "react";
import {useTranslation} from "react-i18next";
import {useNavigate} from "react-router";
import {doUserLogin} from "site/public/action/action";
import validationFor from "utils/form/validationFor";

const SignInForm = () => {
	const {t} = useTranslation();
	const [errors, setErrors] = useState();
	const appContext = useAppContext();
	const layoutContext = useLayoutContext();
	const [form] = Form.useForm();
	const navigate = useNavigate();
	return (
		<Form
			form={form}
			onFinish={values => {
				layoutContext.loadingStart();
				doUserLogin(
					appContext,
					values,
					Events()
						.on("success", data => {
							appContext.login(data);
						})
						.on("error", () => {
							message.error(t("public.sign-in.general-error"));
						})
						.on("http-403", data => {
							setErrors(data);
						})
						.on("done", () => {
							layoutContext.loadingFinish();
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
				<SubmitButton title={"public.sign-in.form.submit.label"} form={form}/>
			</Centered>
		</Form>
	);
};

export default SignInForm;
