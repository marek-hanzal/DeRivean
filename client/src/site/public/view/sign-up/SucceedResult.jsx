import {Button, Card, Result} from "antd";
import {useTranslation} from "react-i18next";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router";
import UserRedux from "redux/user/redux";
import Routes from "site/Routes";

const SucceedResult = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const {t} = useTranslation();
	return (
		<Card>
			<Result
				status="success"
				title={t("public.sign-up.succeed.title")}
				subTitle={t("public.sign-up.succeed.subtitle")}
				extra={[
					<Button type="primary" key="continue" onClick={() => {
						dispatch(UserRedux.redux.register.dispatch.dismiss());
						navigate(Routes.public.signIn.link());
					}}>
						{t("public.sign-up.continue.title")}
					</Button>
				]}
			/>
		</Card>
	);
};

export default SucceedResult;
