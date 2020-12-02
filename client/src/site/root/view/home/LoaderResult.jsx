import {LoaderIcon} from "@leight-core/leight";
import {Result} from "antd";
import {useTranslation} from "react-i18next";

const LoaderResult = () => {
	const {t} = useTranslation();
	return (
		<Result
			icon={<LoaderIcon spin/>}
			status={"info"}
			title={t("root.home.content.loader.title")}
			subTitle={t("root.home.content.loader.subtitle")}
		/>
	);
};

export default LoaderResult;
