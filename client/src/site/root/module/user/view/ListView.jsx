import BaseListView from "component/BaseListView";
import React from "react";
import column from "utils/table/column";

const ListView = ({...props}) =>
	<BaseListView
		{...props}
		columns={[
			column("id"),
		]}
	/>
;

export default ListView;
