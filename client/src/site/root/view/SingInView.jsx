import {Button, Card, Result} from "antd";
import {LayoutContext} from "component/layout/BaseLayout";
import React, {useContext} from "react";
import {useTranslation} from "react-i18next";
import {Link} from "react-router-dom";
import RootView from "site/root/view/RootView";
import Routes from "site/Routes";

const SignInContext = React.createContext({
	id: "root.sign-in"
});

const SingInView = () => {
	const {t} = useTranslation();
	const layoutContext = useContext(LayoutContext);
	layoutContext.useEnableFullscreen();
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
