import React from "react";
import PublicView from "site/public/component/PublicView";
import PublicPath from "site/public/router/PublicPath";
import RegistrationForm from "site/public/view/registration/RegistrationForm";

const RegistrationView = () =>
	<PublicView
		title={"public.registration.title"}
		subtitle={"public.registration.subtitle"}
		open={[PublicPath.root]}
		selected={[PublicPath.registration]}
	>
		<RegistrationForm/>
	</PublicView>
;

export default RegistrationView;
