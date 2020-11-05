import {Card, Result} from "antd";
import Spinner from "component/icon/Spinner";
import Placeholder from "component/Placeholder";
import useMenuOpen from "hook/useMenuOpen";
import useMenuSelect from "hook/useMenuSelect";
import {useState} from "react";
import {useTranslation} from "react-i18next";
import {useParams} from "react-router";
import {useKingdomFetch} from "redux/kingdom/redux";
import KingdomContext from "site/root/module/kingdom/component/KingdomContext";
import KingdomView from "site/root/module/kingdom/view/KingdomView";

const HomeView = () => {
	const {t} = useTranslation();
	const params = useParams();
	const [kingdom, setKingdom] = useState();
	const [loading, setLoading] = useState(true);
	useKingdomFetch(
		params.kingdom,
		kingdom => {
			setKingdom(kingdom);
			setLoading(false);
		}, () => {
			setLoading(false);
		}
	);
	useMenuOpen(["root.hero", "root.building"]);
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
						/>
					</Card>
				)}
			</KingdomContext.Consumer>
		</KingdomView>
	);
};

export default HomeView;
