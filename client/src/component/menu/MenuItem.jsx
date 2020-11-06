import {Menu} from "antd";
import diffArray from "arr-diff";
import PropTypes from "prop-types";
import {useTranslation} from "react-i18next";
import {generatePath} from "react-router";
import {Link, useParams} from "react-router-dom";

const MenuItem = (props) => {
	const {t} = useTranslation();
	const params = useParams();
	const request = props.href.params || [];
	const diff = diffArray(request, Object.keys(params));
	return (
		<Menu.Item icon={props.icon} {...props} disabled={diff.length}>
			<Link to={diff.length ? "" : generatePath(props.href.link(), params)}>{t(`${props.id}.menu`)}</Link>
		</Menu.Item>
	);
};

MenuItem.propTypes = {
	id: PropTypes.string.isRequired,
	icon: PropTypes.element.isRequired,
	href: PropTypes.object.isRequired,
};

export default MenuItem;
