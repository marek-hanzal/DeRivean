import { Spin } from "antd";
import React from "react";
import { withTranslation } from "react-i18next";
import { connect } from "react-redux";
import { isLoading } from "redux/loading/selector";

const Loading = (
	{
		t,
		isLoading,
		children,
	}) => <Spin spinning={isLoading} tip={t("common.spinner")} children={children}/>
;

export default connect(
	state => ({
		isLoading: isLoading(state),
	}),
)(withTranslation()(Loading));
