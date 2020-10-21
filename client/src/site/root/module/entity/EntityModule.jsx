import Module from "component/Module";
import React from "react";
import CreateView from "site/root/module/entity/view/CreateView";
import HomeView from "site/root/module/entity/view/HomeView";
import ListView from "site/root/module/entity/view/ListView";

const EntityModule = ({root, translation, view}) =>
	<Module
		root={root}
		view={view}
		home={HomeView}
		create={CreateView}
		list={ListView}
		translation={`${translation}.entity`}
	/>
;

export default EntityModule;
