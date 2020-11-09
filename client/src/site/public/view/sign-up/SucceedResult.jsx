import {Button, Card, Result} from "antd";
import {useTranslation} from "react-i18next";
import {useNavigate} from "react-router";
import Routes from "site/Routes";

const SucceedResult = () => {
	const navigate = useNavigate();
	const {t} = useTranslation();
	return (
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
	);
};

export default SucceedResult;
