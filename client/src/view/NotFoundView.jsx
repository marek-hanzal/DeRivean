import {Button, Result} from "antd";
import useFullsizeContent from "hook/useFullsizeContent";
import {Helmet} from "react-helmet";
import {useTranslation} from "react-i18next";
import {Link} from "react-router-dom";

const NotFoundView = () => {
	const {t} = useTranslation();
	useFullsizeContent(true);
	return (
		<>
			<Helmet title={t("error.not-found.title")}/>
			<Result
				status="404"
				title={t("error.not-found.title")}
				subTitle={t("error.not-found.body")}
				extra={<Button type="primary">
					<Link to={"/"}>{t("common.homepage")}</Link>
				</Button>}
			/>
		</>
	);
};

export default NotFoundView;
