import {MehOutlined, PoweroffOutlined, RobotOutlined} from "@ant-design/icons";
import CommonMenu from "component/CommonMenu";
import React from "react";
import {withTranslation} from "react-i18next";
import EntityPath from "site/root/entity/router/EntityPath";
import PlayerPath from "site/root/player/router/PlayerPath";
import RootPath from "site/root/router/RootPath";

const RootMenu = ({t, ...props}) =>
	<CommonMenu
		translation={"root"}
		items={[
			{href: PlayerPath.home, label: "player.home", icon: <MehOutlined/>},
			{href: EntityPath.home, label: "entity.home", icon: <RobotOutlined/>},
			"-",
			{href: RootPath.signOut, label: "sign-out", icon: <PoweroffOutlined/>},
		]}
		{...props}
	/>
;

export default withTranslation()(RootMenu);
