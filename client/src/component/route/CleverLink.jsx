import diffArray from "arr-diff";
import {LayoutContext} from "component/layout/BaseLayout";
import omitEmpty from "omit-empty";
import {useContext} from "react";
import {generatePath} from "react-router";
import {Link, useParams} from "react-router-dom";

const useCleverLink = (to) => {
	const layoutContext = useContext(LayoutContext);
	const request = to.params || [];
	const params = useParams();
	const current = omitEmpty({...layoutContext.fetch, ...params});
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
