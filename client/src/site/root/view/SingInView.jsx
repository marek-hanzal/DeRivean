import {Button, Card, Result} from "antd";
import {useTranslation} from "react-i18next";
import {Link} from "react-router-dom";
import RootView from "site/root/view/RootView";
import Routes from "site/Routes";

const SingInView = () => {
	const {t} = useTranslation();
	return (
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
							<Link to={Routes.root.link()}>{t("root.sign-in.continue.title")}</Link>
						</Button>
					]}
				/>
			</Card>
		</RootView>
	);
};

export default SingInView;
