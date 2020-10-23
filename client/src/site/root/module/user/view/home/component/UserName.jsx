import {Skeleton} from "antd";

const UserName = ({user}) => user ? <span>{user.name}</span> : <Skeleton.Input active={true} size={"small"}/>;

export default UserName;
