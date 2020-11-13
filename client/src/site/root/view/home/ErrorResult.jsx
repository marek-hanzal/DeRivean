import {FrownOutlined, HeartFilled} from "@ant-design/icons";
import {Alert, Button, Divider, List, Result} from "antd";
import Centered from "component/layout/Centered";
import SiteContext from "component/SiteContext";
import {useContext} from "react";
import {useTranslation} from "react-i18next";
import {useNavigate} from "react-router";
import KingdomIcon from "site/common/icon/KingdomIcon";
import UserIcon from "site/root/module/user/component/icon/UserIcon";
import Routes from "site/Routes";

const QuickActionButton = (props) => {
	const {t} = useTranslation();

	return (
		<Button style={{width: "100%"}} icon={<HeartFilled/>} type={"danger"} ghost children={t("root.server.error.action." + props.action)} {...props}/>
	);
};

const QuickAction = ({action}) => {
	const siteContext = useContext(SiteContext);
	const navigate = useNavigate();
	const {t} = useTranslation();
	switch (action) {
		case "create-template-user":
			return (
				<QuickActionButton
					icon={<UserIcon/>}
					action={action}
					onClick={() => {
						siteContext.setInitials({
							name: "template",
							login: "template",
						});
						navigate(Routes.root.user.create.link());
					}}
				/>
			);
		case "create-template-kingdom":
			return (
				<QuickActionButton
					icon={<KingdomIcon/>}
					action={action}
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
