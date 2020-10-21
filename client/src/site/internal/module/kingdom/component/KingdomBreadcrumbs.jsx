import React from "react";
import RootBreadcrumbs from "site/internal/module/kingdom/component/RootBreadcrumbs";
import HeroesBreadcrumbs from "site/internal/module/kingdom/module/heroes/component/HeroesBreadcrumbs";

const KingdomBreadcrumbs = () => ([].concat(
	HeroesBreadcrumbs(),
	RootBreadcrumbs(),
));

export default KingdomBreadcrumbs;
