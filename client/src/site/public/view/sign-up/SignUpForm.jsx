import {Button, Form, Input} from "antd";
import {DiscoveryContext} from "component/discovery/Discovery";
import SignUpIcon from "component/icon/SignUpIcon";
import {LayoutContext} from "component/layout/BaseLayout";
import Centered from "component/layout/Centered";
import {useContext, useState} from "react";
import {useTranslation} from "react-i18next";
import {useNavigate} from "react-router";
import {doUserRegister} from "site/public/action/action";
import Routes from "site/Routes";
import Events from "utils/Events";
import enableSubmit from "utils/form/enableSubmit";
import validationFor from "utils/form/validationFor";

const SignUpForm = () => {
	const discoveryContext = useContext(DiscoveryContext);
	const layoutContext = useContext(LayoutContext);
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
					discoveryContext,
					values,
					Events()
						.on("success", () => {
							navigate(Routes.public.signUpSuccess.link());
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
