import {Button, Form, Input} from "antd";
import SignUpIcon from "component/icon/SignUpIcon";
import Centered from "component/layout/Centered";
import {useTranslation} from "react-i18next";
import {useDispatch, useSelector} from "react-redux";
import UserRedux from "redux/user/redux";
import enableSubmit from "utils/form/enableSubmit";
import validationFor from "utils/form/validationFor";

const SignUpForm = () => {
	const {t} = useTranslation();
	const [form] = Form.useForm();
	const errors = useSelector(UserRedux.redux.register.selector.getError);
	const dispatch = useDispatch();
	return (
		<Form
			labelCol={{span: 6}}
			form={form}
			onFinish={values => {
				dispatch(UserRedux.redux.register.dispatch.register(values));
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
				<Form.Item shouldUpdate={true}>
					{() => (
						<Button
							type="primary"
							htmlType="submit"
							icon={<SignUpIcon/>}
							onClick={() => dispatch(UserRedux.redux.register.dispatch.dismiss())}
							disabled={enableSubmit(form, ["name", "login", "password"])}
							children={t("public.sign-up.form.submit.label")}
						/>
					)}
				</Form.Item>
			</Centered>
		</Form>
	);
};

export default SignUpForm;
