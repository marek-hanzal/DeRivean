import BaseLayout from "component/layout/BaseLayout";
import Breadcrumbs from "site/root/site/Breadcrumbs";
import Footer from "site/root/site/Footer";
import Header from "site/root/site/Header";
import Menu from "site/root/site/Menu";
import Router from "site/root/site/Router";

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
