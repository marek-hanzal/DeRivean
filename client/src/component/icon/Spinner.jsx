import LoaderIcon from "component/icon/LoaderIcon";
import PropTypes from "prop-types";

const Spinner = ({done, icon}) => {
	return (done ? icon : <LoaderIcon spin/>);
};

Spinner.propTypes = {
	done: PropTypes.any,
	icon: PropTypes.element.isRequired,
};

export default Spinner;
