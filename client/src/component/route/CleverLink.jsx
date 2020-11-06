import diffArray from "arr-diff";
import omitEmpty from "omit-empty";
import {useSelector} from "react-redux";
import {generatePath} from "react-router";
import {Link, useParams} from "react-router-dom";
import {NavigationRedux} from "redux/navigation/redux";

const useCleverLink = (to) => {
	const request = to.params || [];
	const params = useParams();
	const current = omitEmpty({...useSelector(NavigationRedux.selector.params), ...params});
	const diff = diffArray(request, Object.keys(current));
	return {
		enable: !diff.length,
		link: diff.length ? "" : generatePath(to.link(), current),
	};
};

const CleverLink = ({to, ...props}) => {
	const link = useCleverLink(to);
	return (
		<Link to={link.link} {...props}/>
	);
};

export {
	CleverLink,
	useCleverLink,
};
