import {Button, Result} from "antd";
import {Helmet} from "react-helmet";
import {useTranslation} from "react-i18next";

const LanguageErrorView = () => {
	const {t} = useTranslation();
	return (
		<>
			<Helmet title={t("error.language.title")}/>
			<Result
				status="500"
				title={t("error.language.title")}
				subTitle={t("error.language.body")}
				extra={<Button type="primary" onClick={() => window.location.reload()}>{t("common.refresh")}</Button>}
			/>
		</>
	);
};

export default LanguageErrorView;
