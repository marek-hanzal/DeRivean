import BaseBreadcrumbs from "component/breadcrumbs/BaseBreadcrumbs";
import HomeIcon from "component/icon/HomeIcon";
import {Route, Routes} from "react-router";
import PublicPath from "site/public/site/PublicPath";
import RootPath from "site/root/site/RootPath";
import breadcrumbIconItem from "utils/breadcrumbs/breadcrumbIconItem";

const HomeBreadcrumbs = () =>
	<BaseBreadcrumbs
		items={[
			breadcrumbIconItem(PublicPath.root, <HomeIcon/>),
		]}
	/>
;

const Breadcrumbs = () =>
	<Routes>
		<Route path={RootPath.root}>
			<Route element={<HomeBreadcrumbs/>}/>
		</Route>
	</Routes>
;

export default Breadcrumbs;
