import {Button, Result} from "antd";
import FullsizeContent from "component/layout/FullsizeContent";
import {Helmet} from "react-helmet";
import {withTranslation} from "react-i18next";
import {Link} from "react-router-dom";

const NotFoundView = ({t}) =>
	<>
		<Helmet title={t("error.not-found.title")}/>
		<FullsizeContent fullsize={true} reset={true}/>
		<Result
			status="404"
			title={t("error.not-found.title")}
			subTitle={t("error.not-found.body")}
			extra={<Button type="primary">
				<Link to={"/"}>{t("common.homepage")}</Link>
			</Button>}
		/>
	</>
;

export default withTranslation()(NotFoundView);
