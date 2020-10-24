import {Button, Card, Result} from "antd";
import {useTranslation} from "react-i18next";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router";
import {onUserRegisterDismiss} from "redux/user/register/action";
import Routes from "site/public/site/Routes";

const SucceedResult = () => {
	const navigate = useNavigate();
	const {t} = useTranslation();
	const dispatch = useDispatch();
	return (
		<Card>
			<Result
				status="success"
				title={t("public.sign-up.succeed.title")}
				subTitle={t("public.sign-up.succeed.subtitle")}
				extra={[
					<Button type="primary" key="continue" onClick={() => {
						dispatch(onUserRegisterDismiss());
						navigate(Routes.relative.signIn);
					}}>
						{t("public.sign-up.continue.title")}
					</Button>
				]}
			/>
		</Card>
	);
};

export default SucceedResult;
