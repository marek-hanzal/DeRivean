import {Spin} from "antd";
import {useTranslation} from "react-i18next";
import {useSelector} from "react-redux";
import {isLoading} from "redux/loading/selector";

const Loader = ({children}) => {
	const loading = useSelector(isLoading);
	const {t} = useTranslation();
	return (
		<Spin spinning={loading} delay={100} tip={t("common.spinner")} children={children}/>
	);
};

export default Loader;
