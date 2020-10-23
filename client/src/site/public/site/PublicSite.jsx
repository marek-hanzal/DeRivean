import {Layout, PageHeader} from "antd";
import CollapsibleContent from "component/layout/CollapsibleContent";
import Sider from "component/layout/Sider";
import Loading from "component/Loading";
import ScrollToTop from "component/ScrollToTop";
import PublicRouter from "site/public/router/PublicRouter";
import Footer from "site/public/site/Footer";
import Header from "site/public/site/Header";

const PublicSite = () =>
	<Loading>
		<Layout>
			<ScrollToTop/>
			<Header/>
			<Layout style={{
				minHeight: "100vh",
				padding: "0 50px",
				marginTop: 64
			}}>
				<Sider/>
				<CollapsibleContent>
					<PageHeader>
						breadcrumbs here!
					</PageHeader>
					<PublicRouter/>
				</CollapsibleContent>
			</Layout>
			<Footer/>
		</Layout>
	</Loading>
;

export default PublicSite;
