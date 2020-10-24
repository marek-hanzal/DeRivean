import {Layout, PageHeader} from "antd";
import CollapsibleContent from "component/layout/CollapsibleContent";
import Sider from "component/layout/Sider";
import Loader from "component/Loader";
import ScrollToTop from "component/ScrollToTop";
import Breadcrumbs from "site/public/site/Breadcrumbs";
import Footer from "site/public/site/Footer";
import Header from "site/public/site/Header";
import Menu from "site/public/site/Menu";
import Router from "site/public/site/Router";

const Site = () =>
	<Loader>
		<Layout>
			<ScrollToTop/>
			<Header/>
			<Layout style={{
				minHeight: "100vh",
				padding: "0 50px",
				marginTop: 64
			}}>
				<Sider children={<Menu/>}/>
				<CollapsibleContent>
					<PageHeader>
						<Breadcrumbs/>
					</PageHeader>
					<Router/>
					<Footer/>
				</CollapsibleContent>
			</Layout>
		</Layout>
	</Loader>
;

export default Site;
