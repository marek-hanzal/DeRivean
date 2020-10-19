import React from "react";
import PublicView from "site/public/component/PublicView";
import PublicPath from "site/public/router/PublicPath";
import SignInForm from "site/public/view/sing-in/SignInForm";

const SingInView = () =>
	<PublicView
		title={"public.sign-in.title"}
		subtitle={"public.sign-in.subtitle"}
		open={[PublicPath.root]}
		selected={[PublicPath.signIn]}
		children={<SignInForm/>}
	/>
;

export default SingInView;
