import {Button, Card, Result} from "antd";
import {withTranslation} from "react-i18next";
import {connect} from "react-redux";
import {useNavigate} from "react-router";
import {onUserRegisterDismiss} from "redux/user/register/action";
import Routes from "site/public/site/Routes";

const SucceedResult = (
	{
		t,
		onDismiss,
	}) => {
		const navigate = useNavigate();
		return (
			<Card>
				<Result
					status="success"
					title={t("public.sign-up.succeed.title")}
					subTitle={t("public.sign-up.succeed.subtitle")}
					extra={[
						<Button type="primary" key="continue" onClick={() => {
							onDismiss();
							navigate("../" + Routes.signIn);
						}}>
							{t("public.sign-up.continue.title")}
						</Button>
					]}
				/>
			</Card>
		);
	}
;

export default connect(
	state => ({}),
	dispatch => ({
		onDismiss: () => dispatch(onUserRegisterDismiss())
	}),
)(withTranslation()(SucceedResult));
