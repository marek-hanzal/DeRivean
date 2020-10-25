import {Button, Card, Result} from "antd";
import {useTranslation} from "react-i18next";
import {Link} from "react-router-dom";
import PublicView from "site/public/view/PublicView";
import Routes from "site/Routes";

const SingOutView = () => {
	const {t} = useTranslation();
	return (
		<PublicView
			id={"public.sign-out"}
			fullsize={true}
		>
			<Card>
				<Result
					status="success"
					title={t("public.sign-out.succeed.title")}
					subTitle={t("public.sign-out.succeed.subtitle")}
					extra={[
						<Button type="primary" key="continue">
							<Link to={Routes.public.link()}>{t("public.sign-out.continue.title")}</Link>
						</Button>
					]}
				/>
			</Card>
		</PublicView>
	);
};

export default SingOutView;
