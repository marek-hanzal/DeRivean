import {
	Button,
	Card,
	Result
} from "antd";
import React from "react";
import { withTranslation } from "react-i18next";
import { connect } from "react-redux";
import { onUserRegisterDismiss } from "redux/user/register/action";
import { getUserRegisterError } from "redux/user/register/selector";

const FailedResult = (
	{
		t,
		error,
		onDismiss,
	}) =>
	<Card>
		<Result
			status="error"
			title={t("public.sign-up.failed.title")}
			subTitle={t("raw." + error)}
			extra={[
				<Button type="primary" key="close" onClick={() => onDismiss()}>
					{t("public.sign-up.close.title")}
				</Button>
			]}
		/>
	</Card>
;

export default connect(
	state => ({
		error: getUserRegisterError(state),
	}),
	dispatch => ({
		onDismiss: () => dispatch(onUserRegisterDismiss()),
	}),
)(withTranslation()(FailedResult));
