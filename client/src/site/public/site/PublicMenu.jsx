import HomeIcon from "component/icon/HomeIcon";
import SignInIcon from "component/icon/SignInIcon";
import SignUpIcon from "component/icon/SignUpIcon";
import PublicPath from "site/public/router/PublicPath";
import menuDivider from "utils/menu/menuDivider";
import menuItem from "utils/menu/menuItem";

const PublicMenu = () => ([
	menuItem(PublicPath.root, "public.home", <HomeIcon/>),
	menuDivider(),
	menuItem(PublicPath.signUp, "public.sign-up", <SignUpIcon/>),
	menuItem(PublicPath.signIn, "public.sign-in", <SignInIcon/>),
]);

export default PublicMenu;
