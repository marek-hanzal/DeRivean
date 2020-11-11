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
	const [collapsed, setCollapsed] = useState(false);
	const [loading, setLoading] = useState(0);
	return (
		<LayoutContext.Provider
			value={{
				fullscreen,
				setFullscreen,
				useEnableFullscreen: (enable = true, restore = true) => useEffect(() => {
					setFullscreen(enable);
					return () => setFullscreen(!restore);
				}),
				menu,
				selectMenu,
				setSelectMenu,
				useMenuSelect: select => useEffect(() => {
					setTimeout(() => setSelectMenu(isArray(select) ? select : [select]), 0);
				}, [select]),
				collapsed,
				setCollapsed,
				loading,
				isLoading: () => this.loading <= 0,
				loadingStart: () => setLoading(prev => prev + 1),
				loadingFinish: () => setLoading(prev => prev - 1),
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
