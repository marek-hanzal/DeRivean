import {Button, Form, Input, message} from "antd";
import SignInIcon from "component/icon/SignInIcon";
import Centered from "component/layout/Centered";
import {useState} from "react";
import {useTranslation} from "react-i18next";
import {useDispatch, useStore} from "react-redux";
import {LoadingRedux} from "redux/loading/redux";
import {SessionRedux} from "redux/session/redux";
import {doUserLogin} from "redux/user/redux";
import enableSubmit from "utils/form/enableSubmit";
import validationFor from "utils/form/validationFor";

const SignInForm = () => {
	const {t} = useTranslation();
	const [errors, setErrors] = useState();
	const dispatch = useDispatch();
	const store = useStore();
	const [form] = Form.useForm();
	return (
		<Form
			form={form}
			onFinish={values => {
				dispatch(LoadingRedux.start());
				doUserLogin(
					store.getState(),
					values,
					data => {
						dispatch(SessionRedux.open(data));
						dispatch(LoadingRedux.finish());
					},
					() => {
						dispatch(LoadingRedux.finish());
						message.error(t("public.sign-in.general-error"));
					},
					{
						403: (error) => {
							setErrors(error.response.data);
							dispatch(LoadingRedux.finish());
						}
					}
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
