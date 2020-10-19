import React from "react";
import {connect} from "react-redux";
import {getUserRegisterStatus} from "redux/user/register/selector";
import PublicView from "site/public/component/PublicView";
import PublicPath from "site/public/router/PublicPath";
import RegistrationFailed from "site/public/view/registration/RegistrationFailed";
import RegistrationForm from "site/public/view/registration/RegistrationForm";
import RegistrationSucceed from "site/public/view/registration/RegistrationSucceed";

function resolveStatus(status) {
	switch (status) {
		case "SUCCESS":
			return <RegistrationSucceed/>;
		case "FAILURE":
			return <RegistrationFailed/>;
		default:
			return <RegistrationForm/>;
	}
}

const RegistrationView = (
	{
		status,
	}) =>
	<PublicView
		title={"public.registration.title"}
		subtitle={"public.registration.subtitle"}
		open={[PublicPath.root]}
		selected={[PublicPath.registration]}
		children={resolveStatus(status)}
	/>
;

export default connect(
	state => ({
		status: getUserRegisterStatus(state),
	}),
	dispatch => ({}),
)(RegistrationView);
