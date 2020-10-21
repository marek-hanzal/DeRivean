import Module from "component/Module";
import React from "react";
import CreateView from "site/root/module/user/view/CreateView";
import HomeView from "site/root/module/user/view/HomeView";
import ListView from "site/root/module/user/view/ListView";

const UserModule = ({root, translation, view}) =>
	<Module
		root={root}
		view={view}
		home={HomeView}
		create={CreateView}
		list={ListView}
		translation={`${translation}.user`}
	/>
;

export default UserModule;
