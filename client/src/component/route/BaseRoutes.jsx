import {Route, Routes} from "react-router";

function makeRoutes(routes) {
	const list = [];
	for (const [path, element] of Object.entries(routes)) {
		list.push(<Route key={path} path={path} element={element}/>);
	}
	return list;
}

const BaseRoutes = ({routes}) => <Routes children={makeRoutes(routes)}/>;

export default BaseRoutes;
