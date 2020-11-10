import {
	Button,
	Card,
	Result
} from "antd";
import useFullsizeContent from "hook/useFullsizeContent";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";
import PublicView from "site/public/view/PublicView";
import Routes from "site/Routes";

const SignUpSuccessView = () => {
	const navigate = useNavigate();
	const {t}      = useTranslation();
	useFullsizeContent(true);
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
