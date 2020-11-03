import {Button, Form, Input} from "antd";
import SignInIcon from "component/icon/SignInIcon";
import Centered from "component/layout/Centered";
import {useTranslation} from "react-i18next";
import {useDispatch, useSelector, useStore} from "react-redux";
import {SessionRedux} from "redux/session/redux";
import {UserRedux} from "redux/user/redux";
import enableSubmit from "utils/form/enableSubmit";
import validationFor from "utils/form/validationFor";

const SignInForm = () => {
	const {t} = useTranslation();
	const errors = useSelector(UserRedux.redux.login.selector.getError);
	const dispatch = useDispatch();
	const store = useStore();
	const [form] = Form.useForm();
	return (
		<Form
			form={form}
			onFinish={values => dispatch(UserRedux.redux.login.dispatch.login(values)).then(() => {
				dispatch(SessionRedux.open(UserRedux.redux.login.selector.getPayload(store.getState())));
			}, () => null)}
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
				<Form.Item shouldUpdate={true}>
					{() => (
						<Button
							type="primary"
							htmlType="submit"
							icon={<SignInIcon/>}
							onClick={() => dispatch(UserRedux.redux.login.dispatch.dismiss())}
							disabled={enableSubmit(form, ["login", "password"])}
							children={t("public.sign-in.form.submit.label")}
						/>
					)}
				</Form.Item>
			</Centered>
		</Form>
	);
};

export default SignInForm;
