import {Button, Card, Result} from "antd";
import FullsizeContent from "component/layout/FullsizeContent";
import {withTranslation} from "react-i18next";
import {Link} from "react-router-dom";
import Routes from "site/public/site/Routes";
import PublicView from "site/public/view/PublicView";

const SingOutView = (
	{
		t,
	}) =>
	<PublicView id={"public.sign-out"}>
		<FullsizeContent fullsize={true} reset={true}/>
		<Card>
			<Result
				status="success"
				title={t("public.sign-out.succeed.title")}
				subTitle={t("public.sign-out.succeed.subtitle")}
				extra={[
					<Button type="primary" key="continue">
						<Link to={Routes.root}>{t("public.sign-out.continue.title")}</Link>
					</Button>
				]}
			/>
		</Card>
	</PublicView>
;

export default withTranslation()(SingOutView);
