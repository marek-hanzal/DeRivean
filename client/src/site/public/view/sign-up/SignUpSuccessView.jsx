import {link, useLayoutContext} from "@leight-core/leight";
import {Button, Card, Result} from "antd";
import {useTranslation} from "react-i18next";
import {useNavigate} from "react-router";
import PublicView from "site/public/view/PublicView";

const SignUpSuccessView = () => {
	const navigate = useNavigate();
	const layoutContext = useLayoutContext();
	const {t} = useTranslation();
	layoutContext.useEnableFullscreen();
	return (
		<PublicView>
			<Card>
				<Result
					status={"success"}
					title={t("public.sign-up.succeed.title")}
					subTitle={t("public.sign-up.succeed.subtitle")}
					extra={[
						<Button
							type={"primary"}
							key={"continue"}
							onClick={() => setTimeout(() => navigate(link("public.sign-in")), 0)}
							children={t("public.sign-up.continue.title")}
						/>
					]}
				/>
			</Card>
		</PublicView>
	);
};

export default SignUpSuccessView;
