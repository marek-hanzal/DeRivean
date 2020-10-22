import Module from "component/Module";
import React from "react";
import CreateView from "site/root/module/user/view/CreateView";
import DashboardView from "site/root/module/user/view/DashboardView";
import ListView from "site/root/module/user/view/ListView";

const UserModule = ({root, translation, view}) =>
	<Module
		root={root}
		view={view}
		dashboard={DashboardView}
		create={CreateView}
		list={ListView}
		translation={`${translation}.user`}
	/>
;

export default UserModule;
