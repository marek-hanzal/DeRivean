import {Menu} from "antd";
import {withTranslation} from "react-i18next";
import {connect} from "react-redux";
import {generatePath, useParams} from "react-router";
import {Link} from "react-router-dom";
import {getMenuItem} from "redux/menu/selector";

const BaseMenu = (
	{
		t,
		open = [],
		selected = [],
		items = [],
	}) => {
		const params = useParams();
		return (
			<Menu
				mode="inline"
				selectable={true}
				defaultOpenKeys={open}
				selectedKeys={selected || []}
				style={{height: "100vh"}}
			>
				{items.map((item, index) => {
					const href = generatePath(item.href || "", params);
					return (
						item === "-" ? <Menu.Divider key={index}/> :
							<Menu.Item key={item.key || index} icon={item.icon}>
								<Link to={href}>{t(`${item.key}.menu`)}</Link>
							</Menu.Item>
					);
				})}
			</Menu>
		);
	}
;

export default connect(
	state => ({
		selected: getMenuItem(state),
	}),
	dispatch => ({})
)(withTranslation()(BaseMenu));
