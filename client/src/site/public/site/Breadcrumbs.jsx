import BaseBreadcrumbs from "component/breadcrumbs/BaseBreadcrumbs";
import HomeIcon from "component/icon/HomeIcon";
import SignInIcon from "component/icon/SignInIcon";
import SignUpIcon from "component/icon/SignUpIcon";
import {Route, Routes} from "react-router-dom";
import PublicPath from "site/public/site/PublicPath";
import breadcrumbCurrentItem from "utils/breadcrumbs/breadcrumbCurrentItem";
import breadcrumbSimpleItem from "utils/breadcrumbs/breadcrumbSimpleItem";

const HomeBreadcrumbs = () =>
	<BaseBreadcrumbs
		items={[
			breadcrumbSimpleItem(PublicPath.root, <HomeIcon/>),
		]}
	/>
;

const SignUpBreadcrumbs = () =>
	<BaseBreadcrumbs
		items={[
			breadcrumbSimpleItem(PublicPath.root, <HomeIcon/>),
			breadcrumbCurrentItem("public.sign-up", <SignUpIcon/>),
		]}
	/>
;

const SignInBreadcrumbs = () =>
	<BaseBreadcrumbs
		items={[
			breadcrumbSimpleItem(PublicPath.root, <HomeIcon/>),
			breadcrumbCurrentItem("public.sign-in", <SignInIcon/>),
		]}
	/>
;

const Breadcrumbs = () =>
	<Routes>
		<Route path={PublicPath.root}>
			<Route path={PublicPath.signUp} element={<SignUpBreadcrumbs/>}/>
			<Route path={PublicPath.signIn} element={<SignInBreadcrumbs/>}/>
			<Route element={<HomeBreadcrumbs/>}/>
		</Route>
	</Routes>
;

export default Breadcrumbs;
