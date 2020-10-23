import { Menu as AtMenu } from "antd";
import React from "react";
import { withTranslation } from "react-i18next";
import { connect } from "react-redux";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { onMenuOpen } from "redux/menu/action";
import {
	getMenuItems,
	isMenu
} from "redux/menu/selector";
import rehref from "utils/rehref";

const Menu = (
	{
		t,
		open = [],
		selected = [],
		onOpenChange,
		isMenu,
		items = [],
	}) => {
		  const params = useParams();
		  return isMenu ? (
			  <AtMenu
				  mode="inline"
				  selectable={true}
				  defaultOpenKeys={open}
				  selectedKeys={selected}
				  onOpenChange={onOpenChange}
				  style={{height: "100vh"}}
			  >
				  {items.map((item, index) => {
					  const href = rehref(item.href || "", params);
					  return item === "-" ? <AtMenu.Divider key={index}/> :
						  <AtMenu.Item key={href} icon={item.icon}>
							  <Link to={href}>{t(`${item.label}.menu`)}</Link>
						  </AtMenu.Item>;
				  })}
			  </AtMenu>
		  ) : null;
	  }
;

export default connect(
	state => ({
		items:  getMenuItems(state),
		isMenu: isMenu(state),
	}),
	dispatch => ({
		onOpenChange: open => dispatch(onMenuOpen(open)),
	})
)(withTranslation()(Menu));
