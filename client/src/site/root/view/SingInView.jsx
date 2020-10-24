import {Button, Card, Result} from "antd";
import {withTranslation} from "react-i18next";
import {Link} from "react-router-dom";
import RootPath from "site/root/router/RootPath";
import RootView from "site/root/site/RootView";

const SingInView = ({t}) =>
	<RootView
		id={"root.sign-in"}
		fullsize={true}
	>
		<Card>
			<Result
				status="success"
				title={t("root.sign-in.succeed.title")}
				subTitle={t("root.sign-in.succeed.subtitle")}
				extra={[
					<Button type="primary" key="continue">
						<Link to={RootPath.root}>{t("root.sign-in.continue.title")}</Link>
					</Button>
				]}
			/>
		</Card>
	</RootView>
;

export default withTranslation()(SingInView);
