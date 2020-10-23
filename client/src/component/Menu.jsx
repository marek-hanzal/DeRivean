import {Menu as AtMenu} from "antd";
import {withTranslation} from "react-i18next";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {onMenuOpen} from "redux/menu/action";

const Menu = (
	{
		t,
		open = [],
		selected = [],
		onOpenChange,
		items = [],
	}) => {
	return (
		<AtMenu
			mode="inline"
			selectable={true}
			defaultOpenKeys={open}
			defaultSelectedKeys={selected}
			onOpenChange={onOpenChange}
			style={{height: "100vh"}}
		>
			{items.map((item, index) => {
				return item === "-" ? <AtMenu.Divider key={index}/> :
					<AtMenu.Item key={item.href} icon={item.icon}>
						<Link to={item.href}>{t(`${item.label}.menu`)}</Link>
					</AtMenu.Item>;
			})}
		</AtMenu>
	);
	}
;

export default connect(
	state => ({}),
	dispatch => ({
		onOpenChange: open => dispatch(onMenuOpen(open)),
	})
)(withTranslation()(Menu));
