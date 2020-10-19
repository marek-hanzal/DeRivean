import {Card, Col, Row} from "antd";
import React from "react";
import {withTranslation} from "react-i18next";
import PublicView from "site/public/component/PublicView";
import PublicPath from "site/public/router/PublicPath";
import SignInForm from "site/public/view/sing-in/SignInForm";

const SingInView = ({t}) =>
	<PublicView
		title={"public.sign-in.title"}
		subtitle={"public.sign-in.subtitle"}
		open={[PublicPath.root]}
		selected={[PublicPath.signIn]}
	>
		<Row justify={"center"}>
			<Col span={6}>
				<Card title={t("public.sign-in.title")} hoverable={true}>
					<SignInForm/>
				</Card>
			</Col>
		</Row>
	</PublicView>
;

export default withTranslation()(SingInView);
