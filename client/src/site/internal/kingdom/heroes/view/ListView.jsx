import React from "react";
import InternalView from "site/internal/component/InternalView";
import KingdomHeroesPath from "site/internal/kingdom/heroes/router/KingdomHeroesPath";

const ListView = () =>
	<InternalView
		open={[KingdomHeroesPath.root]}
		selected={[KingdomHeroesPath.list]}
	>
	</InternalView>
;

export default ListView;
