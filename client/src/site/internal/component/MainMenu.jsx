import React from "react";
import InternalMenu from "site/internal/component/InternalMenu";
import KingdomMenu from "site/internal/kingdom/component/KingdomMenu";

const MainMenu = props =>
	<>
		<InternalMenu {...props}/>
		<KingdomMenu {...props}/>
	</>
;

export default MainMenu;
