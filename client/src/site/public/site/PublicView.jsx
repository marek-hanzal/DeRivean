import SelectMenu from "component/menu/SelectMenu";

const PublicView = ({menu, children}) =>
	<>
		<SelectMenu menu={menu}/>
		{children}
	</>
;

export default PublicView;
