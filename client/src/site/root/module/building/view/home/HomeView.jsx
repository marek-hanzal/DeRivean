import {Button, Card, Result} from "antd";
import Spinner from "component/icon/Spinner";
import Placeholder from "component/Placeholder";
import useMenuSelect from "hook/useMenuSelect";
import {useState} from "react";
import {useTranslation} from "react-i18next";
import {useDispatch} from "react-redux";
import {useNavigate, useParams} from "react-router";
import {useBuildingFetch} from "redux/building/redux";
import {NavigationRedux} from "redux/navigation/redux";
import BuildingContext from "site/root/module/building/component/BuildingContext";
import BuildingView from "site/root/module/building/view/BuildingView";

const HomeView = () => {
	const dispatch = useDispatch();
	const {t} = useTranslation();
	const params = useParams();
	const [building, setBuilding] = useState();
	const [loading, setLoading] = useState(true);
	const navigate = useNavigate();
	useBuildingFetch(
		params.building,
		building => {
			setBuilding(building);
			setLoading(false);
			dispatch(NavigationRedux.params({kingdom: building.kingdom}));
		}, () => {
			setLoading(false);
		}
	);
	useMenuSelect(["root.building"]);
	return (
		<BuildingView>
			<BuildingContext.Consumer>
				{({id, icon, link}) => (
					<Card title={t(`${id}.title`)}>
						<Result
							status={"info"}
							icon={<Spinner done={!loading} icon={icon}/>}
							title={<Placeholder data={building} display={building => building.name}/>}
							subTitle={<Button type={"primary"} ghost onClick={() => {
								navigate(link.edit(params.building));
							}} children={t("root.building.edit.form.edit")}/>}
						>
						</Result>
					</Card>
				)}
			</BuildingContext.Consumer>
		</BuildingView>
	);
};

export default HomeView;
