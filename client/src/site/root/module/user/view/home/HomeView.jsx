import {Card, Result} from "antd";
import useMenuOpen from "hook/useMenuOpen";
import useMenuSelect from "hook/useMenuSelect";
import {useTranslation} from "react-i18next";
import UserContext from "site/root/module/user/component/UserContext";
import UserStatistics from "site/root/module/user/component/UserStatistics";
import UserView from "site/root/module/user/view/UserView";

const HomeView = () => {
	const {t} = useTranslation();
	useMenuOpen(["root.kingdom"]);
	useMenuSelect(["root.user"]);
	return (
		<UserView>
			<UserContext.Consumer>
				{({id, icon}) => (
					<Card title={t(`${id}.title`)}>
						<Result
							icon={icon}
							status={"info"}
						>
							<UserStatistics/>
						</Result>
					</Card>
				)}
			</UserContext.Consumer>
		</UserView>
	);
};

export default HomeView;
