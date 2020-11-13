import {FrownOutlined, HeartFilled} from "@ant-design/icons";
import {Alert, Button, Divider, List, message, Result} from "antd";
import {DiscoveryContext} from "component/discovery/Discovery";
import {LayoutContext} from "component/layout/BaseLayout";
import Centered from "component/layout/Centered";
import SiteContext from "component/SiteContext";
import {useContext} from "react";
import {useTranslation} from "react-i18next";
import {useNavigate} from "react-router";
import KingdomIcon from "site/common/icon/KingdomIcon";
import {quickCreateTemplateUser} from "site/root/action/action";
import {doUserSearch} from "site/root/module/user/action/action";
import UserIcon from "site/root/module/user/component/icon/UserIcon";
import Routes from "site/Routes";
import Events from "utils/Events";

const onTemplateUser = (siteContext, navigate) => {
	siteContext.setInitials({
		name: "template",
		login: "template",
	});
	navigate(Routes.root.user.create.link());
};

const onTemplateKingdom = (siteContext, navigate, userId) => {
	siteContext.setInitials({
		name: "template",
	});
	navigate(Routes.root.kingdom.create.link(userId));
};

const QuickActionButton = (props) => {
	const {t} = useTranslation();

	return (
		<Button style={{width: "100%"}} icon={<HeartFilled/>} type={"danger"} ghost children={t("root.server.error.action." + props.action)} {...props}/>
	);
};

const QuickAction = ({action}) => {
	const siteContext = useContext(SiteContext);
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
								})
						);
						onTemplateUser(siteContext, navigate);
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
						doUserSearch(
							discoveryContext,
							{search: "template"},
							Events()
								.on("success", ({items}) => {
									if (!items[0]) {
										message.error(t("root.home.error.create-template-user-first"));
										onTemplateUser(siteContext, navigate);
										return;
									}
									onTemplateKingdom(siteContext, navigate, items[0].id);
								})
								.on("done", () => layoutContext.loadingFinish()),
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
