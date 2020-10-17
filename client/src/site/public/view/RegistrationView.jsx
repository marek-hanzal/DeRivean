import React from 'react';
import PublicView from "../component/PublicView";
import PublicPath from "../router/PublicPath";

const RegistrationView = () =>
	<PublicView
		title={'public.registration.title'}
		subtitle={'public.registration.subtitle'}
		open={[PublicPath.root]}
		selected={[PublicPath.registration]}
	>
	</PublicView>
;

export default RegistrationView;
