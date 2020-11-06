import {Menu} from "antd";
import diffArray from "arr-diff";
import omitEmpty from "omit-empty";
import PropTypes from "prop-types";
import {useTranslation} from "react-i18next";
import {useSelector} from "react-redux";
import {generatePath} from "react-router";
import {Link, useParams} from "react-router-dom";
import {NavigationRedux} from "redux/navigation/redux";

const MenuItem = (props) => {
	const {t} = useTranslation();
	const params = useParams();
	const current = omitEmpty({...useSelector(NavigationRedux.selector.params), ...params});
	const request = props.href.params || [];
	const diff = diffArray(request, Object.keys(current));
	return (
		<Menu.Item icon={props.icon} {...props} disabled={diff.length}>
			<Link to={diff.length ? "" : generatePath(props.href.link(), current)}>{t(`${props.id}.menu`)}</Link>
		</Menu.Item>
	);
};

MenuItem.propTypes = {
	id: PropTypes.string.isRequired,
	icon: PropTypes.element.isRequired,
	href: PropTypes.object.isRequired,
};

export default MenuItem;
