import {FrownOutlined, HeartFilled} from "@ant-design/icons";
import {Alert, Button, Divider, List, Result} from "antd";
import {DiscoveryContext} from "component/discovery/Discovery";
import {LayoutContext} from "component/layout/BaseLayout";
import Centered from "component/layout/Centered";
import {useContext} from "react";
import {useTranslation} from "react-i18next";
import {useNavigate} from "react-router";
import KingdomIcon from "site/common/icon/KingdomIcon";
import {quickCreateTemplateKingdom, quickCreateTemplateUser} from "site/root/action/action";
import UserIcon from "site/root/module/user/component/icon/UserIcon";
import Routes from "site/Routes";
import Events from "utils/Events";

const QuickActionButton = (props) => {
	const {t} = useTranslation();

	return (
		<Button style={{width: "100%"}} icon={<HeartFilled/>} type={"danger"} ghost children={t("root.server.error.action." + props.action)} {...props}/>
	);
};

const QuickAction = ({action}) => {
	const layoutContext = useContext(LayoutContext);
	const discoveryContext = useContext(DiscoveryContext);
	const navigate = useNavigate();
	const {t} = useTranslation();
	switch (action) {
		case "create-template-user":
			return (
				<QuickActionButton
					icon={<UserIcon/>}
					action={action}
					onClick={() => {
						layoutContext.loadingStart();
						quickCreateTemplateUser(
							discoveryContext,
							Events()
								.on("success", user => {
									setTimeout(() => navigate(Routes.root.user.home.link(user.id)), 0);
								})
								.on("done", () => {
									layoutContext.loadingFinish();
								}),
							navigate,
						);
					}}
				/>
			);
		case "create-template-kingdom":
			return (
				<QuickActionButton
					icon={<KingdomIcon/>}
					action={action}
					onClick={() => {
						layoutContext.loadingStart();
						quickCreateTemplateKingdom(
							discoveryContext,
							Events()
								.on("success", kingdom => {
									setTimeout(() => navigate(Routes.root.kingdom.home.link(kingdom.id)), 0);
								})
								.on("done", () => {
									layoutContext.loadingFinish();
								}),
							navigate,
						);
					}}
				/>
			);
		default:
			return t("root.server.error.action-unavailable");
	}
};

const ErrorResult = ({validation}) => {
	const {t} = useTranslation();

	return (
		<Result
			icon={<FrownOutlined/>}
			status={"error"}
			title={t("root.home.content.error.title")}
			subTitle={t("root.home.content.error.subtitle")}
		>
			<List header={<h2>{t("root.home.content.error.list.title")}</h2>}>
				{validation.errors.map(error => {
					return (
						<List.Item key={error.id}>
							<Alert
								message={t("root.server.error." + error.text)}
								description={
									<Centered span={10}>
										<Divider type={"horizontal"}/>
										<QuickAction action={error.action}/>
									</Centered>
								}
								type="warning"
								showIcon
								style={{width: "100%"}}
							/>
						</List.Item>
					);
				})}
			</List>
		</Result>
	);
};

export default ErrorResult;
