import {Layout, PageHeader} from "antd";
import CollapsibleContent from "component/layout/CollapsibleContent";
import Sider from "component/layout/Sider";
import Loading from "component/Loading";
import ScrollToTop from "component/ScrollToTop";
import Footer from "site/public/site/Footer";
import Header from "site/public/site/Header";
import Menu from "site/public/site/Menu";
import Router from "site/public/site/Router";

const Site = () =>
	<Loading>
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
						breadcrumbs here!
					</PageHeader>
					<Router/>
					<Footer/>
				</CollapsibleContent>
			</Layout>
		</Layout>
	</Loading>
;

export default Site;
