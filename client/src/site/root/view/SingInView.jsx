import {Button, Card, Result} from "antd";
import useFullsizeContent from "hook/useFullsizeContent";
import React from "react";
import {useTranslation} from "react-i18next";
import {Link} from "react-router-dom";
import RootView from "site/root/view/RootView";
import Routes from "site/Routes";

const SignInContext = React.createContext({
	id: "root.sign-in"
});

const SingInView = () => {
	const {t} = useTranslation();
	useFullsizeContent(true, true);
	return (
		<RootView context={SignInContext}>
			<Card>
				<Result
					status={"success"}
					title={t("root.sign-in.succeed.title")}
					subTitle={t("root.sign-in.succeed.subtitle")}
					extra={[
						<Button type="primary" key="continue">
							<Link to={Routes.root.link()}>{t("root.sign-in.continue")}</Link>
						</Button>
					]}
				/>
			</Card>
		</RootView>
	);
};

export default SingInView;
