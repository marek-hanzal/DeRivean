import {Card, Result} from "antd";
import Spinner from "component/icon/Spinner";
import Placeholder from "component/Placeholder";
import useMenuOpen from "hook/useMenuOpen";
import useMenuSelect from "hook/useMenuSelect";
import {useState} from "react";
import {useTranslation} from "react-i18next";
import {useParams} from "react-router";
import {useUserFetch} from "redux/user/redux";
import UserContext from "site/root/module/user/component/UserContext";
import UserStatistics from "site/root/module/user/component/UserStatistics";
import UserView from "site/root/module/user/view/UserView";

const HomeView = () => {
	const {t} = useTranslation();
	const params = useParams();
	const [user, setUser] = useState();
	const [loading, setLoading] = useState(true);
	useUserFetch(
		params.user,
		user => {
			setUser(user);
			setLoading(false);
		}, () => {
			setLoading(false);
		}
	);
	useMenuOpen(["root.kingdom"]);
	useMenuSelect(["root.user"]);

	return (
		<UserView>
			<UserContext.Consumer>
				{({id, icon}) => (
					<Card title={t(`${id}.title`)}>
						<Result
							icon={<Spinner done={!loading} icon={icon}/>}
							status={"info"}
							title={<Placeholder data={user} display={user => user.name}/>}
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
