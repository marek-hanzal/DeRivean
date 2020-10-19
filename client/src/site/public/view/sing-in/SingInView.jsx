import {Col, Row} from "antd";
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
	>
		<Row justify={"center"}>
			<Col span={4}>
				<SignInForm/>
			</Col>
		</Row>
	</PublicView>
;

export default SingInView;
