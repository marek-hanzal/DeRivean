import {Button} from "antd";
import BackIcon from "component/icon/BackIcon";
import {useNavigate} from "react-router";

const BackLink = ({text}) => {
	const navigate = useNavigate();
	return <Button type={"link"} size={"small"} icon={<BackIcon/>} onClick={() => navigate(-1)}> {text}</Button>;
};

export default BackLink;
