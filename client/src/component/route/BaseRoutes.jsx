import {Route, Routes} from "react-router";

const BaseRoutes = ({routes}) => <Routes children={routes.map(item => <Route key={item.path} path={item.path} element={item.element}/>)}/>;

export default BaseRoutes;
