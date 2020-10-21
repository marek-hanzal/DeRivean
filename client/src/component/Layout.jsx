import {Layout as AntdLayout, PageHeader, Spin} from "antd";
import React from "react";
import {Helmet} from "react-helmet";
import {withTranslation} from "react-i18next";
import {connect} from "react-redux";
import {isLoading} from "redux/loading/selector";
import {onMenuCollapse} from "redux/menu/collapse/action";
import {isMenuCollapsed} from "redux/menu/collapse/selector";

const Layout = (
	{
		title,
		subtitle,
		header,
		footer,
		menu,
		breadcrumbs,
		loading,
		isCollapsed,
		onCollapse,
		children,
		t,
	}) =>
	<Spin spinning={loading} tip={t("common.spinner")}>
		<AntdLayout>
			<Helmet title={t(title)}/>
			{header}
			<AntdLayout style={{minHeight: "100vh", padding: "0 50px", marginTop: 64}}>
				<AntdLayout.Sider
					collapsible
					collapsed={isCollapsed}
					defaultCollapsed={isCollapsed}
					onCollapse={onCollapse}
					width={220}
					style={{
						overflow: "auto",
						height: "100vh",
						position: "fixed",
						backgroundColor: "rgb(240, 242, 245)",
						left: 0,
					}}
					children={menu}
				/>
				<AntdLayout.Content style={{minHeight: "100vh", marginLeft: isCollapsed ? 80 : 220}}>
					<PageHeader title={t(title)} subTitle={t(subtitle)} children={breadcrumbs}/>
					{children}
					<AntdLayout.Footer style={{textAlign: "center"}} children={footer}/>
				</AntdLayout.Content>
			</AntdLayout>
		</AntdLayout>
	</Spin>
;

export default connect(
	state => ({
		loading: isLoading(state),
		isCollapsed: isMenuCollapsed(state),
	}),
	dispatch => ({
		onCollapse: isCollapsed => dispatch(onMenuCollapse(isCollapsed)),
	})
)(withTranslation()(Layout));

