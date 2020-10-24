import {Skeleton} from "antd";

const UserName = ({user}) => user ? user.name : <Skeleton.Input style={{width: 200}} active={true} size={"large"}/>;

export default UserName;
