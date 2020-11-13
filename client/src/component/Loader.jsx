import {SettingFilled} from "@ant-design/icons";
import {Spin} from "antd";
import {LayoutContext} from "component/layout/BaseLayout";
import {useContext} from "react";
import {useTranslation} from "react-i18next";

const Loader = ({children}) => {
	const layoutContext = useContext(LayoutContext);
	const {t} = useTranslation();
	return (
		<Spin indicator={<SettingFilled spin/>} spinning={layoutContext.isLoading()} delay={50} tip={t("common.spinner")} children={children}/>
	);
};

export default Loader;
