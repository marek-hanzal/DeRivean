import {Layout, PageHeader,} from "antd";
import CollapsibleContent from "component/layout/CollapsibleContent";
import Sider from "component/layout/Sider";
import Loading from "component/Loading";
import ScrollToTop from "component/ScrollToTop";
import RootRouter from "site/root/router/RootRouter";
import Footer from "site/root/site/Footer";
import Header from "site/root/site/Header";

const RootSite = () =>
	<Loading>
		<Layout>
			<ScrollToTop/>
			<Header/>
			<Layout style={{
				minHeight: "100vh",
				padding: "0 50px",
				marginTop: 64
			}}>
				<Sider>
					[root menu should be here!]
				</Sider>
				<CollapsibleContent>
					<PageHeader>
						breadcrumbs here!
					</PageHeader>
					<RootRouter/>
				</CollapsibleContent>
			</Layout>
			<Footer/>
		</Layout>
	</Loading>
;

export default RootSite;
