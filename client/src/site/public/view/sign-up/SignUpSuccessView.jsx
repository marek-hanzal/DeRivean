import {Button, Card, Result} from "antd";
import {LayoutContext} from "component/layout/BaseLayout";
import {useContext} from "react";
import {useTranslation} from "react-i18next";
import {useNavigate} from "react-router";
import PublicView from "site/public/view/PublicView";
import Routes from "site/Routes";

const SignUpSuccessView = () => {
	const navigate = useNavigate();
	const layoutContext = useContext(LayoutContext);
	const {t} = useTranslation();
	layoutContext.useEnableFullscreen();
	return (
		<PublicView>
			<Card>
				<Result
					status="success"
					title={t("public.sign-up.succeed.title")}
					subTitle={t("public.sign-up.succeed.subtitle")}
					extra={[
						<Button
							type="primary"
							key="continue"
							onClick={() => setTimeout(() => navigate(Routes.public.signIn.link()), 0)}
							children={t("public.sign-up.continue.title")}
						/>
					]}
				/>
			</Card>
		</PublicView>
	);
};

export default SignUpSuccessView;
