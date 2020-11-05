import {Skeleton} from "antd";

const Placeholder = ({data, display, children}) => {
	return data ? display(data) : (children || <Skeleton.Input size={"large"} style={{width: 200}} active={true}/>);
};

export default Placeholder;
