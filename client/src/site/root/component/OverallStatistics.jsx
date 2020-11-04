import {Card, Divider, message, Space, Spin, Statistic} from "antd";
import {useEffect, useState} from "react";
import {useTranslation} from "react-i18next";
import {useDispatch} from "react-redux";
import {StatisticsRedux} from "redux/statistics/redux";
import ModuleIcon from "site/root/component/ModuleIcon";

const OverallStatistics = (
	{
		action,
		show = ["users", "kingdoms", "buildings", "heroes", "translations"]
	}) => {
	const {t} = useTranslation();
	const dispatch = useDispatch();
	const [data, setData] = useState({users: 0, kingdoms: 0, heroes: 0, buildings: 0});
	const [loading, setLoading] = useState(true);
	action = action || (() => StatisticsRedux.redux.statistics.dispatch.statistics());
	useEffect(() => {
		dispatch(action()).then(statistics => {
			setData(statistics);
			setLoading(false);
		}, () => {
			message.error(t("root.statistic.fetch-error"));
			setLoading(false);
		});
		// eslint-disable-next-line
	}, [dispatch, t]);
	return (
		<Card style={{textAlign: "center"}}>
			<Spin spinning={loading}>
				<Space size={"large"} split={<Divider type={"vertical"}/>} style={{textAlign: "center"}}>
					{show.map(item => <Statistic key={item} title={t(`root.statistic.${item}`)} value={data[item]} prefix={<ModuleIcon module={item}/>}/>)}
				</Space>
			</Spin>
		</Card>
	);
};

export default OverallStatistics;
