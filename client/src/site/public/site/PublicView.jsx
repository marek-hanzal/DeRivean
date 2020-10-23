import WithMenu from "component/view/WithMenu";
import PublicMenu from "site/public/site/PublicMenu";

const PublicView = ({children}) => <WithMenu menu={PublicMenu()}>{children}</WithMenu>;

export default PublicView;
