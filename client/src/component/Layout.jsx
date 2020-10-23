import {
	Layout as AtLayout,
	PageHeader,
	Spin
} from "antd";
import ScrollToTop from "component/ScrollToTop";
import React from "react";
import { Helmet } from "react-helmet";
import { withTranslation } from "react-i18next";
import { connect } from "react-redux";
import { isLoading } from "redux/loading/selector";
import { onMenuCollapse } from "redux/menu/action";
import { isMenuCollapsed } from "redux/menu/selector";

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
		<ScrollToTop/>
		<AtLayout>
			<Helmet title={t(title)}/>
			{header}
			<AtLayout style={{
				minHeight: "100vh",
				padding:   "0 50px",
				marginTop: 64
			}}>
				<AtLayout.Sider
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
				<AtLayout.Content style={{
					minHeight:  "100vh",
					marginLeft: isCollapsed ? 80 : 220
				}}>
					<PageHeader title={t(title)} subTitle={t(subtitle)} children={breadcrumbs}/>
					{children}
					<AtLayout.Footer style={{textAlign: "center"}} children={footer}/>
				</AtLayout.Content>
			</AtLayout>
		</AtLayout>
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

