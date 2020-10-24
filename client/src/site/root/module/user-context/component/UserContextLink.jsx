import {Link} from "react-router-dom";
import Routes from "site/root/module/user-context/site/Routes";

const UserContextLink = ({uuid, children}) => <Link to={Routes.link.dashboard(uuid)} children={children}/>;

export default UserContextLink;
