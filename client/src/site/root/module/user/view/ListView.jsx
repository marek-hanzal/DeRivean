import BaseListView from "component/BaseListView";
import React from "react";

const ListView = ({...props}) =>
	<BaseListView
		{...props}
		columns={[]}
	/>
;

export default ListView;
