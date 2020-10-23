import CreateIcon from "component/icon/CreateIcon";
import HomeIcon from "component/icon/HomeIcon";
import ListIcon from "component/icon/ListIcon";
import breadcrumbItem from "utils/breadcrumbs/breadcrumbItem";
import breadcrumbs from "utils/breadcrumbs/breadcrumbs";
import breadcrumbSimpleItem from "utils/breadcrumbs/breadcrumbSimpleItem";

const commonBreadcrumbs = (
	home,
	root,
	icon,
	translation,
) => ([
	breadcrumbs(`${root}/list`, [
		breadcrumbSimpleItem(home, <HomeIcon/>),
		breadcrumbItem(`${root}/dashboard`, `${translation}.dashboard`, icon),
		breadcrumbItem(`${root}/list`, `${translation}.list`, <ListIcon/>),
	]),
	breadcrumbs(`${root}/create`, [
		breadcrumbSimpleItem(home, <HomeIcon/>),
		breadcrumbItem(`${root}/dashboard`, `${translation}.dashboard`, icon),
		breadcrumbItem(`${root}/create`, `${translation}.create`, <CreateIcon/>),
	]),
	breadcrumbs(root, [
		breadcrumbSimpleItem(home, <HomeIcon/>),
		breadcrumbItem(`${root}/dashboard`, `${translation}.dashboard`, icon),
	]),
]);

export default commonBreadcrumbs;
