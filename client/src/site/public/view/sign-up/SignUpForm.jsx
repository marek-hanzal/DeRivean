import {Centered, Events, link, SubmitButton, useAppContext, useLayoutContext} from "@leight-core/leight";
import {Form, Input} from "antd";
import {useState} from "react";
import {useTranslation} from "react-i18next";
import {useNavigate} from "react-router";
import {doUserRegister} from "../../action/action";

const SignUpForm = () => {
	const appContext = useAppContext();
	const layoutContext = useLayoutContext();
	const navigate = useNavigate();
	const {t} = useTranslation();
	const [form] = Form.useForm();
	const [errors, setErrors] = useState();
	return (
		<Form
			labelCol={{span: 6}}
			form={form}
			onFinish={values => {
				layoutContext.loadingStart();
				doUserRegister(
					appContext,
					values,
					Events()
						.on("success", () => {
							navigate(link("public.sign-up.success"));
						})
						.on("http-409", data => {
							setErrors(data);
						})
						.on("done", () => {
							layoutContext.loadingFinish();
						})
				);
			}}
			name={"sign-up"}
		>
			<Form.Item
				name="name"
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
				rules={[
					{
						required: true,
						message: t("public.sign-up.form.password.required")
					}
				]}
				children={<Input.Password addonBefore={<div style={{width: "120px"}}>{t("public.sign-up.form.password.label")}</div>}/>}
			/>
			<Centered>
				<SubmitButton title={"public.sign-up.form.submit.label"} form={form}/>
			</Centered>
		</Form>
	);
};

export default SignUpForm;
