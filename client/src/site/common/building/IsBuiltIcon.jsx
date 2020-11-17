import BuildingIcon from "site/common/icon/BuildingIcon";

const IsBuiltIcon = ({isBuilt}) => {
	return (
		<BuildingIcon style={isBuilt ? {color: "#262"} : {color: "#CCC"}}/>
	);
};

export default IsBuiltIcon;
