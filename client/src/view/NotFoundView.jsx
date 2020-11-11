import {Button, Result} from "antd";
import HomeIcon from "component/icon/HomeIcon";
import {LayoutContext} from "component/layout/BaseLayout";
import {useContext} from "react";
import {Helmet} from "react-helmet";
import {useTranslation} from "react-i18next";
import {Link} from "react-router-dom";

const NotFoundView = () => {
	const {t} = useTranslation();
	const layoutContext = useContext(LayoutContext);
	layoutContext.useEnableFullscreen();
	return (
		<>
			<Helmet title={t("error.not-found.title")}/>
			<Result
				status="404"
				title={t("error.not-found.title")}
				subTitle={t("error.not-found.body")}
				extra={
					<Link to={"/"} children={<Button type="primary" icon={<HomeIcon/>} children={t("common.homepage")}/>}/>
				}
			/>
		</>
	);
};

export default NotFoundView;
