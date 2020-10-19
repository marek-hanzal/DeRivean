import {Button, Result} from "antd";
import React from "react";
import {withTranslation} from "react-i18next";
import {connect} from "react-redux";
import {onUserRegisterDismiss} from "redux/user/register/action";
import {getUserRegisterError} from "redux/user/register/selector";

const RegistrationFailed = (
	{
		t,
		error,
		onDismiss,
	}) =>
	<Result
		status="error"
		title={t("public.registration.failed.title")}
		subTitle={t("raw." + error)}
		extra={[
			<Button type="primary" key="close" onClick={() => onDismiss()}>
				{t("public.registration.close.title")}
			</Button>
		]}
	/>
;

export default connect(
	state => ({
		error: getUserRegisterError(state),
	}),
	dispatch => ({
		onDismiss: () => dispatch(onUserRegisterDismiss()),
	}),
)(withTranslation()(RegistrationFailed));
