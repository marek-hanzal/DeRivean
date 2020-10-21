import Module from "component/Module";
import React from "react";
import CreateView from "site/root/module/entity/view/CreateView";
import HomeView from "site/root/module/entity/view/HomeView";
import ListView from "site/root/module/entity/view/ListView";

const EntityModule = ({root}) =>
	<Module
		root={root}
		home={HomeView}
		create={CreateView}
		list={ListView}
	/>
;

export default EntityModule;
