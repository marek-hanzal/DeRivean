import {ErrorIcon, Events} from "@leight-core/leight";
import {Divider, message, Space, Spin, Statistic, Tooltip} from "antd";
import {useState} from "react";
import {useTranslation} from "react-i18next";
import {useStatistics} from "../hook/hook";

const OverallStatistics = (
	{
		action,
		show = ["users", "kingdoms", "buildings", "heroes", "translations"],
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
				message.error(t("root.statistic.fetch-error"));
			})
			.on("http-403", () => {
				setUnavailable(true);
			})
	);
	return (
		unavailable ?
			<Tooltip defaultVisible title={<><ErrorIcon/>&nbsp;{t("root.statistics.unavailable")}</>}>
				<Spin spinning={true} indicator={null}>
					<Space size={"large"} split={<Divider type={"vertical"}/>} style={{textAlign: "center"}}>
						{show.filter(value => !exclude.includes(value)).map(item => <Statistic key={item} title={t(`root.statistic.${item}`)} value={data[item]} prefix={<ModuleIcon module={item}/>}/>)}
					</Space>
				</Spin>
			</Tooltip> :
			<Spin spinning={loading}>
				<Space size={"large"} split={<Divider type={"vertical"}/>} style={{textAlign: "center"}}>
					{show.filter(value => !exclude.includes(value)).map(item => <Statistic key={item} title={t(`root.statistic.${item}`)} value={data[item]} prefix={<ModuleIcon module={item}/>}/>)}
				</Space>
			</Spin>
	);
};

export default OverallStatistics;
