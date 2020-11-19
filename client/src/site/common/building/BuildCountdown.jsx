import {Statistic} from "antd";
import ModuleContext from "component/ModuleContext";
import {useContext} from "react";
import {useTranslation} from "react-i18next";

const BuildCountdown = ({building, title}) => {
	const {t} = useTranslation();
	const moduleContext = useContext(ModuleContext);
	return (
		building.build && !building.isBuilt ? <Statistic.Countdown title={title !== false ? t(moduleContext.id + ".build-countdown") : null} value={Date.parse(building.build)}/> : null
	);
};

export default BuildCountdown;
