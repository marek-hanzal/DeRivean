import {Card, Result} from "antd";
import Spinner from "component/icon/Spinner";
import Placeholder from "component/Placeholder";
import useMenuSelect from "hook/useMenuSelect";
import {useState} from "react";
import {useTranslation} from "react-i18next";
import {useDispatch} from "react-redux";
import {useParams} from "react-router";
import {KingdomRedux, useKingdomFetch} from "redux/kingdom/redux";
import {NavigationRedux} from "redux/navigation/redux";
import KingdomContext from "site/root/module/kingdom/component/KingdomContext";
import KingdomStatistics from "site/root/module/kingdom/component/KingdomStatistics";
import KingdomView from "site/root/module/kingdom/view/KingdomView";

const HomeView = () => {
	const dispatch = useDispatch();
	const {t} = useTranslation();
	const params = useParams();
	const [kingdom, setKingdom] = useState();
	const [loading, setLoading] = useState(true);
	useKingdomFetch(
		params.kingdom,
		kingdom => {
			setKingdom(kingdom);
			setLoading(false);
			dispatch(NavigationRedux.params({user: kingdom.user}));
		}, () => {
			setLoading(false);
		}
	);
	useMenuSelect(["root.kingdom"]);
	return (
		<KingdomView>
			<KingdomContext.Consumer>
				{({id, icon}) => (
					<Card title={t(`${id}.title`)}>
						<Result
							status={"info"}
							icon={<Spinner done={!loading} icon={icon}/>}
							title={<Placeholder data={kingdom} display={kingdom => kingdom.name}/>}
						>
							<KingdomStatistics action={cancelToken => KingdomRedux.redux.statistics.dispatch.fetch(params.kingdom, cancelToken)}/>
						</Result>
					</Card>
				)}
			</KingdomContext.Consumer>
		</KingdomView>
	);
};

export default HomeView;
