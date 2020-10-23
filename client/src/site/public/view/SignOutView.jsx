import {Button, Card, Result} from "antd";
import FullsizeContent from "component/layout/FullsizeContent";
import {withTranslation} from "react-i18next";
import {Link} from "react-router-dom";
import PublicPath from "site/public/router/PublicPath";
import PublicView from "site/public/site/PublicView";

const SingOutView = (
	{
		t,
	}) =>
	<PublicView>
		<FullsizeContent fullsize={true}/>
		<Card>
			<Result
				status="success"
				title={t("public.sign-out.succeed.title")}
				subTitle={t("public.sign-out.succeed.subtitle")}
				extra={[
					<Button type="primary" key="continue">
						<Link to={PublicPath.root}>{t("public.sign-out.continue.title")}</Link>
					</Button>
				]}
			/>
		</Card>
	</PublicView>
;

export default withTranslation()(SingOutView);
