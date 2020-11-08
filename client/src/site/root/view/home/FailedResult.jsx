import {Result} from "antd";
import ErrorIcon from "component/icon/ErrorIcon";
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
