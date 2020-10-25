import Breadcrumb from "antd/lib/breadcrumb";
import {useTranslation} from "react-i18next";
import {Link} from "react-router-dom";

const BaseBreadcrumbs = ({items}) => {
	const {t} = useTranslation();
	return (
		<Breadcrumb>
			{items.map((breadcrumb, index) => breadcrumb.label ?
				<Breadcrumb.Item key={breadcrumb.href || index}>
					<Link to={breadcrumb.href || "."}>{breadcrumb.icon}&nbsp;{t(`${breadcrumb.label}.breadcrumb`)}</Link>
				</Breadcrumb.Item> :
				<Breadcrumb.Item key={breadcrumb.href || index}>
					<Link to={breadcrumb.href || "."}>{breadcrumb.icon}</Link>
				</Breadcrumb.Item>
			)}
		</Breadcrumb>
	);
};

export default BaseBreadcrumbs;
