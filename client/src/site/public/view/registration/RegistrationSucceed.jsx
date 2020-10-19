import {Button, Result} from "antd";
import React from "react";
import {withTranslation} from "react-i18next";
import {connect} from "react-redux";

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
				{t("public.registration.continue.title")}
			</Button>
		]}
	/>
;

export default connect(
	state => ({}),
	dispatch => ({
		onSubmit: () => alert("yaaaay!")
	}),
)(withTranslation()(RegistrationSucceed));
