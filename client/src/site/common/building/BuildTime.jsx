import dayjs from "dayjs";
import Countdown from "react-countdown";
import {useTranslation} from "react-i18next";
import {attributeFindByType} from "site/root/module/attribute/utils/utils";

const BuildTime = ({building}) => {
	const {t} = useTranslation();
	const buildTime = attributeFindByType("building", "build-time", building.attributes);

	if (building.build) {
		return <span>{t("common.building.build-in")}&nbsp;<Countdown date={building.build}/></span>;
	}
	if (buildTime) {
		return <span>{t("common.building.build-time")}&nbsp;{dayjs.duration(buildTime.value, "hour").humanize()}</span>;
	}
	return t("common.building.build-time-instantly");
};

export default BuildTime;
