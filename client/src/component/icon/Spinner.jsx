import LoaderIcon from "component/icon/LoaderIcon";
import PropTypes from "prop-types";

const Spinner = ({enable, icon}) => {
	return (enable ? icon : <LoaderIcon spin/>);
};

Spinner.propTypes = {
	enable: PropTypes.any,
	icon: PropTypes.element.isRequired,
};

export default Spinner;
