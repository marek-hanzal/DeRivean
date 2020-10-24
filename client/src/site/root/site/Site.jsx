import {Layout, PageHeader,} from "antd";
import CollapsibleContent from "component/layout/CollapsibleContent";
import Sider from "component/layout/Sider";
import Loader from "component/Loader";
import ScrollToTop from "component/ScrollToTop";
import RootRouter from "site/root/router/RootRouter";
import Footer from "site/root/site/Footer";
import Header from "site/root/site/Header";
import RootMenu from "site/root/site/RootMenu";

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
				<Sider children={<RootMenu/>}/>
				<CollapsibleContent>
					<PageHeader>
						breadcrumbs here!
					</PageHeader>
					<RootRouter/>
					<Footer/>
				</CollapsibleContent>
			</Layout>
		</Layout>
	</Loader>
;

export default Site;
