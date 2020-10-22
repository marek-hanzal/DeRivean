import Module from "component/Module";
import React from "react";
import CreateView from "site/root/module/entity/view/CreateView";
import DashboardView from "site/root/module/entity/view/DashboardView";
import ListView from "site/root/module/entity/view/ListView";

const EntityModule = ({root, translation, view}) =>
	<Module
		root={root}
		view={view}
		dashboard={DashboardView}
		create={CreateView}
		list={ListView}
		translation={`${translation}.entity`}
	/>
;

export default EntityModule;
