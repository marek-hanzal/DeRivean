import LoaderIcon from "component/icon/LoaderIcon";
import KingdomContextIcon from "site/root/module/kingdom-context/component/icon/KingdomContextIcon";

const Spinner = ({enable}) => {
	return (enable ? <KingdomContextIcon/> : <LoaderIcon spin/>);
};

export default Spinner;
