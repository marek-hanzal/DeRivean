import Breadcrumb from "antd/lib/breadcrumb";
import {useTranslation} from "react-i18next";
import {generatePath, Link, useParams} from "react-router-dom";

const BaseBreadcrumbs = ({items}) => {
	const {t} = useTranslation();
	const params = useParams();
	return (
		<Breadcrumb>
			{items.map((breadcrumb, index) => {
					const href = generatePath(breadcrumb.href || "", params);
					const label = breadcrumb.label ? <>{breadcrumb.icon}&nbsp;{t(`${breadcrumb.label}.breadcrumb`)}</> : breadcrumb.icon;
					return (
						breadcrumb.label ?
							<Breadcrumb.Item key={href || index}>
								{href ? <Link to={href}>{label}</Link> : label}
							</Breadcrumb.Item> :
							<Breadcrumb.Item key={href || index}>
								{href ? <Link to={href}>{label}</Link> : label}
							</Breadcrumb.Item>
					);
				}
			)}
		</Breadcrumb>
	);
};

export default BaseBreadcrumbs;
