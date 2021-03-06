import {Card, Divider, message, Space, Spin, Statistic, Tooltip} from "antd";
import ErrorIcon from "component/icon/ErrorIcon";
import {useState} from "react";
import {useTranslation} from "react-i18next";
import ModuleIcon from "site/common/icon/ModuleIcon";
import {useStatistics} from "site/game/hook/hook";
import Events from "utils/Events";

const OverallStatistics = (
	{
		action,
		show = ["kingdoms", "buildings", "heroes"],
		exclude = [],
	}) => {
	const {t} = useTranslation();
	const [data, setData] = useState({users: 0, kingdoms: 0, heroes: 0, buildings: 0});
	const [unavailable, setUnavailable] = useState(false);
	const [loading, setLoading] = useState(true);
	(action || useStatistics)(
		Events()
			.on("success", statistics => {
				setData(statistics);
				setLoading(false);
			})
			.on("error", () => {
				setLoading(false);
				message.error(t("game.statistic.fetch-error"));
			})
			.on("http-403", () => {
				setUnavailable(true);
			})
	);
	return (
		<Card style={{textAlign: "center"}}>
			{unavailable ?
				<Tooltip defaultVisible title={<><ErrorIcon/>&nbsp;{t("game.statistics.unavailable")}</>}>
					<Spin spinning={true} indicator={null}>
						<Space size={"large"} split={<Divider type={"vertical"}/>} style={{textAlign: "center"}}>
							{show.filter(value => !exclude.includes(value)).map(item => <Statistic key={item} title={t(`game.statistic.${item}`)} value={data[item]} prefix={<ModuleIcon module={item}/>}/>)}
						</Space>
					</Spin>
				</Tooltip> :
				<Spin spinning={loading}>
					<Space size={"large"} split={<Divider type={"vertical"}/>} style={{textAlign: "center"}}>
						{show.filter(value => !exclude.includes(value)).map(item => <Statistic key={item} title={t(`game.statistic.${item}`)} value={data[item]} prefix={<ModuleIcon module={item}/>}/>)}
					</Space>
				</Spin>
			}
		</Card>
	);
};

export default OverallStatistics;
