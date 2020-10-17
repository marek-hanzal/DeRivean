import React from 'react';
import PublicView from "../component/PublicView";
import PublicPath from "../router/PublicPath";

const RegistrationView = () =>
	<PublicView
		title={'public.registration.title'}
		open={[PublicPath.root]}
		selected={[PublicPath.registration]}
	>
	</PublicView>
;

export default RegistrationView;
