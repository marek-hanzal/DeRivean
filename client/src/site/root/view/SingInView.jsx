import {Button, Card, Result} from "antd";
import WithMenu from "component/view/WithMenu";
import {withTranslation} from "react-i18next";
import {Link} from "react-router-dom";
import RootPath from "site/root/router/RootPath";

const SingInView = ({t}) =>
	<WithMenu menu={null}>
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
	</WithMenu>
;

export default withTranslation()(SingInView);
