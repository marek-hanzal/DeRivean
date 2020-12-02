import {Centered, Events, Form, FormItem, SubmitButton, useAppContext, useLayoutContext} from "@leight-core/leight";
import {Input, message} from "antd";
import {useState} from "react";
import {useTranslation} from "react-i18next";
import {doUserLogin} from "site/public/action/action";

const SignInForm = () => {
	const {t} = useTranslation();
	const [errors, setErrors] = useState();
	const appContext = useAppContext();
	const layoutContext = useLayoutContext();
	const onFinish = values => {
		layoutContext.loadingStart();
		doUserLogin(
			values,
			appContext,
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
		);
	};

	return (
		<Form
			onFinish={onFinish}
			name={"sign-in"}
		>
			<FormItem required name={"login"} showLabel={false}>
				{label => <Input addonBefore={<div style={{width: "120px"}}>{label}</div>}/>}
			</FormItem>
			<FormItem name={"password"} required showLabel={false}>
				{label => <Input.Password addonBefore={<div style={{width: "120px"}}>{label}</div>}/>}
			</FormItem>
			<Centered>
				<SubmitButton title={"public.sign-in.form.submit.label"}/>
			</Centered>
		</Form>
	);
};

export default SignInForm;
