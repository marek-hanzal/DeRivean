import {Button, Result} from "antd";
import HomeIcon from "component/icon/HomeIcon";
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
				extra={
					<Link to={"/"}>
						<Button type="primary" icon={<HomeIcon/>}>
							{t("common.homepage")}
						</Button>
					</Link>
				}
			/>
		</>
	);
};

export default NotFoundView;
