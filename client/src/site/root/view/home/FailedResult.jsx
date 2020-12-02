import {ErrorIcon} from "@leight-core/leight";
import {Result} from "antd";
import {useTranslation} from "react-i18next";

const LoaderResult = () => {
	const {t} = useTranslation();
	return (
		<Result
			icon={<ErrorIcon/>}
			status={"error"}
			title={t("root.home.content.validation-failed.title")}
			subTitle={t("root.home.content.validation-failed.subtitle")}
		/>
	);
};

export default LoaderResult;
