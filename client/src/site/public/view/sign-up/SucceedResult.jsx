import {Button, Card, Result} from "antd";
import React from "react";
import {withTranslation} from "react-i18next";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {onUserRegisterDismiss} from "redux/user/register/action";
import PublicPath from "site/public/router/PublicPath";

const SucceedResult = (
	{
		t,
		onDismiss,
	}) =>
	<Card>
		<Result
			status="success"
			title={t("public.sign-up.succeed.title")}
			subTitle={t("public.sign-up.succeed.subtitle")}
			extra={[
				<Button type="primary" key="continue" onClick={() => onDismiss()}>
					<Link to={PublicPath.signIn}>{t("public.sign-up.continue.title")}</Link>
				</Button>
			]}
		/>
	</Card>
;

export default connect(
	state => ({}),
	dispatch => ({
		onDismiss: () => dispatch(onUserRegisterDismiss())
	}),
)(withTranslation()(SucceedResult));
