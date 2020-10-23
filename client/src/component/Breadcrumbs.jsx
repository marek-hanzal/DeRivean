import Breadcrumb from "antd/lib/breadcrumb";
import {withTranslation} from "react-i18next";
import {Route, Routes, useParams} from "react-router";
import {Link} from "react-router-dom";
import rehref from "utils/rehref";

const Breadcrumbs = (
	{
		t,
		items,
	}) => {
		const params = useParams();
		return (
			<Routes>
				{items.map(item =>
					<Route key={item.path} path={item.path}>
						<Breadcrumb>
							{item.items.map(breadcrumb => {
								const href = rehref(breadcrumb.href, params);
								return breadcrumb.label ?
									<Breadcrumb.Item key={href}>
										<Link to={href}>{breadcrumb.icon}&nbsp;{t(`${breadcrumb.label}.breadcrumb`)}</Link>
									</Breadcrumb.Item> :
									<Breadcrumb.Item key={href}>
										<Link to={href}>{breadcrumb.icon}</Link>
									</Breadcrumb.Item>;
							})}
						</Breadcrumb>
					</Route>
				)}
			</Routes>
		);
	}
;

export default withTranslation()(Breadcrumbs);