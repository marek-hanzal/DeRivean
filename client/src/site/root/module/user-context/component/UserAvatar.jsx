import {Avatar, Skeleton} from "antd";

const UserAvatar = ({user, ...props}) =>
	user ? <Avatar {...props}>{user.name}</Avatar> : <Skeleton.Avatar {...props}/>
;

export default UserAvatar;
