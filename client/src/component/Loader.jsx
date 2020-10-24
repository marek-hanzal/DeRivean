import {Spin} from "antd";
import {withTranslation} from "react-i18next";
import {connect} from "react-redux";
import {isLoading} from "redux/loading/selector";

const Loader = (
	{
		t,
		isLoading,
		children,
	}) => <Spin spinning={isLoading} delay={100} tip={t("common.spinner")} children={children}/>
;

export default connect(
	state => ({
		isLoading: isLoading(state),
	}),
)(withTranslation()(Loader));
