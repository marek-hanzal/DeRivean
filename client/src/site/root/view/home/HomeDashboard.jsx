import {SmileOutlined} from "@ant-design/icons";
import {Card, Divider, message, Result, Space, Spin, Statistic} from "antd";
import {useEffect, useState} from "react";
import {useTranslation} from "react-i18next";
import {useDispatch} from "react-redux";
import {StatisticsRedux} from "redux/statistics/redux";
import BuildingIcon from "site/root/module/building/component/icon/BuildingIcon";
import HeroIcon from "site/root/module/hero/component/icon/HeroIcon";
import KingdomIcon from "site/root/module/kingdom/component/icon/KingdomIcon";
import UserIcon from "site/root/module/user/component/icon/UserIcon";

const HomeDashboard = () => {
	const {t} = useTranslation();
	const dispatch = useDispatch();
	const [data, setData] = useState({users: 0, kingdoms: 0, heroes: 0, buildings: 0});
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		dispatch(StatisticsRedux.redux.statistics.dispatch.statistics()).then(statistics => {
			setData(statistics);
			setLoading(false);
		}, () => {
			message.error(t("root.statistic.fetch-error"));
			setLoading(false);
		});
	}, [dispatch, t]);
	return (
		<Result
			icon={<SmileOutlined/>}
			status={"info"}
			title={t("root.home.content.title")}
			subTitle={t("root.home.content.subtitle")}
		>
			<Card style={{textAlign: "center"}}>
				<Spin spinning={loading}>
					<Space size={"large"} split={<Divider type={"vertical"}/>} style={{textAlign: "center"}}>
						<Statistic title={t("root.statistic.users")} value={data.users} prefix={<UserIcon/>}/>
						<Statistic title={t("root.statistic.kingdoms")} value={data.kingdoms} prefix={<KingdomIcon/>}/>
						<Statistic title={t("root.statistic.heroes")} value={data.heroes} prefix={<HeroIcon/>}/>
						<Statistic title={t("root.statistic.buildings")} value={data.buildings} prefix={<BuildingIcon/>}/>
					</Space>
				</Spin>
			</Card>
		</Result>
	);
};

export default HomeDashboard;
