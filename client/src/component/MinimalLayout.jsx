import {Layout, PageHeader, Spin} from "antd";
import React from "react";
import {Helmet} from "react-helmet";
import {withTranslation} from "react-i18next";
import {connect} from "react-redux";
import {isLoading} from "redux/loading/selector";

const MinimalLayout = (
	{
		title,
		subtitle,
		header,
		footer,
		breadcrumbs,
		loading,
		children,
		t,
	}) =>
	<Spin spinning={loading} tip={t("common.spinner")}>
		<Layout>
			<Helmet title={t(title)}/>
			{header}
			<Layout style={{minHeight: "100vh", padding: "0 50px", marginTop: 64}}>
				<Layout.Content style={{minHeight: "100vh"}}>
					<PageHeader title={t(title)} subTitle={t(subtitle)} children={breadcrumbs}/>
					{children}
					<Layout.Footer style={{textAlign: "center"}} children={footer}/>
				</Layout.Content>
			</Layout>
		</Layout>
	</Spin>
;

export default connect(
	state => ({
		loading: isLoading(state),
	}),
	dispatch => ({})
)(withTranslation()(MinimalLayout));

