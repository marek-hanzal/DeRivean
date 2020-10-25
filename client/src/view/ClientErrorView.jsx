import {Button, Result} from "antd";
import {Helmet} from "react-helmet";
import {useTranslation} from "react-i18next";

const ClientErrorView = () => {
	const {t} = useTranslation();
	return (
		<>
			<Helmet title={t("error.client.title")}/>
			<Result
				status="500"
				title={t("error.client.title")}
				subTitle={t("error.client.body")}
				extra={<Button type="primary" onClick={() => window.location.reload()}>{t("common.refresh")}</Button>}
			/>
		</>
	);
};

export default ClientErrorView;
