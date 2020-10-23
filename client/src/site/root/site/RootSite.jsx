import {
	Layout,
	PageHeader,
} from "antd";
import Loading from "component/Loading";
import ScrollToTop from "component/ScrollToTop";
import React from "react";
import CollapsibleContent from "site/root/site/CollapsibleContent";
import Footer from "site/root/site/Footer";
import Header from "site/root/site/Header";
import Sider from "site/root/site/Sider";

const RootSite = () =>
	<Loading>
		<Layout>
			<ScrollToTop/>
			<Header/>
			<Layout style={{
				minHeight: "100vh",
				padding:   "0 50px",
				marginTop: 64
			}}>
				<Sider/>
				<CollapsibleContent>
					<PageHeader>
						// breadcrumbs
					</PageHeader>
					// switch router here?
				</CollapsibleContent>
			</Layout>
			<Footer/>
		</Layout>
	</Loading>
;

export default RootSite;
