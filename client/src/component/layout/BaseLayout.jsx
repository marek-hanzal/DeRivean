import {Layout, PageHeader} from "antd";
import CollapsibleContent from "component/layout/CollapsibleContent";
import Sider from "component/layout/Sider";
import Loader from "component/Loader";
import isArray from "isarray";
import React, {useEffect, useState} from "react";

const LayoutContext = React.createContext(null);

const BaseLayout = (
	{
		header,
		router,
		menu,
		footer,
	}
) => {
	const [fullscreen, setFullscreen] = useState(false);
	const [selectMenu, setSelectMenu] = useState([]);
	return (
		<LayoutContext.Provider
			value={{
				fullscreen,
				setFullscreen,
				useEnableFullscreen: function (enable = true, restore = true) {
					useEffect(() => {
						this.setFullscreen(enable);
						return () => this.setFullscreen(!restore);
					});
				},
				menu,
				selectMenu,
				setSelectMenu,
				useMenuSelect: function (select) {
					useEffect(() => {
						setTimeout(() => {
							this.setSelectMenu(isArray(select) ? select : [select]);
						}, 0);
					}, [select]);
				}
			}}
			children={
				<Loader>
					<Layout>
						{fullscreen ? null : header}
						<Layout style={{
							minHeight: "100vh",
							padding: "0 50px",
							marginTop: 64
						}}>
							<Sider children={menu}/>
							<CollapsibleContent>
								<PageHeader/>
								{router}
								{footer}
							</CollapsibleContent>
						</Layout>
					</Layout>
				</Loader>
			}
		/>
	);
};

export {
	BaseLayout,
	LayoutContext,
};
