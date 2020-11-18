import {Statistic} from "antd";
import ModuleContext from "component/ModuleContext";
import {useContext} from "react";
import {useTranslation} from "react-i18next";

const BuildCountdown = ({building}) => {
	const {t} = useTranslation();
	const moduleContext = useContext(ModuleContext);
	return (
		building.build && !building.isBuilt ? <Statistic.Countdown title={t(moduleContext.id + ".build-countdown")} value={Date.parse(building.build)}/> : null
	);
};

export default BuildCountdown;
