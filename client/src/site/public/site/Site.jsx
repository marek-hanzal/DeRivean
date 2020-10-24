import BaseLayout from "component/layout/BaseLayout";
import Breadcrumbs from "site/public/site/Breadcrumbs";
import Footer from "site/public/site/Footer";
import Header from "site/public/site/Header";
import Menu from "site/public/site/Menu";
import Router from "site/public/site/Router";

/**
 * Site could be maybe abstracted too, but it's here to prevent moving internal site stuff
 * to root level of the application (thus we can have Menu instead of Menu used somewhere around App).
 */
const Site = () =>
	<BaseLayout
		header={<Header/>}
		menu={<Menu/>}
		breadcrumbs={<Breadcrumbs/>}
		router={<Router/>}
		footer={<Footer/>}
	/>
;

export default Site;
