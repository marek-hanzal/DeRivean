import HomeIcon from "component/icon/HomeIcon";
import SignInIcon from "component/icon/SignInIcon";
import SignUpIcon from "component/icon/SignUpIcon";
import Menu from "component/Menu";
import {Route, Routes} from "react-router-dom";
import PublicPath from "site/public/router/PublicPath";
import menuDivider from "utils/menu/menuDivider";
import menuItem from "utils/menu/menuItem";

const RootMenu = () =>
	<Menu
		isMenu={true}
		items={[
			menuItem(PublicPath.root, "public.home", <HomeIcon/>),
			menuDivider(),
			menuItem(PublicPath.signUp, "public.sign-up", <SignUpIcon/>),
			menuItem(PublicPath.signIn, "public.sign-in", <SignInIcon/>),
		]}
	/>
;

const PublicMenu = () =>
	<Routes>
		<Route path={PublicPath.root + "/*"} element={<RootMenu/>}>

		</Route>
	</Routes>
;

export default PublicMenu;
