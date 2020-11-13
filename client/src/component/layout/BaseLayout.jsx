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
	const [fetch, setFetch] = useState({});
	return (
		<LayoutContext.Provider
			value={{
				fullscreen,
				setFullscreen,
				useEnableFullscreen: (enable = true, restore = true) => useEffect(() => {
					setFullscreen(enable);
					return () => setFullscreen(!restore);
					// eslint-disable-next-line
				}, []),
				menu,
				selectMenu,
				setSelectMenu,
				useMenuSelect: select => useEffect(() => {
					setTimeout(() => setSelectMenu(isArray(select) ? select : [select]), 0);
					// eslint-disable-next-line
				}, []),
				collapsed,
				setCollapsed,
				loading,
				isLoading: () => loading > 0,
				loadingStart: () => {
					window.scrollTo(0, 0);
					setLoading(prev => prev + 1);
				},
				loadingFinish: () => {
					setLoading(prev => prev - 1);
				},
				fetch,
				setFetch,
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
