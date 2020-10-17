import React from 'react';
import PublicView from "../component/PublicView";
import PublicPath from "../router/PublicPath";

const LoginView = () =>
	<PublicView
		title={'public.login.title'}
		subtitle={'public.login.subtitle'}
		open={[PublicPath.root]}
		selected={[PublicPath.login]}
	>
	</PublicView>
;

export default LoginView;
