import {Button, Result} from "antd";
import React from "react";
import {withTranslation} from "react-i18next";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {onSessionOpen} from "redux/session/action";
import {getUserRegisterUser} from "redux/user/register/selector";

const RegistrationSucceed = (
	{
		t,
		onSubmit,
	}) =>
	<Result
		status="success"
		title={t("public.registration.succeed.title")}
		subTitle={t("public.registration.succeed.subtitle")}
		extra={[
			<Button type="primary" key="close" onClick={() => onSubmit()}>
				<Link to={"/"}>{t("public.registration.continue.title")}</Link>
			</Button>
		]}
	/>
;

export default connect(
	state => ({}),
	{
		onSubmit: () => (dispatch, getState) => dispatch(onSessionOpen(getUserRegisterUser(getState()))),
	},
)(withTranslation()(RegistrationSucceed));
