import {Layout, PageHeader} from "antd";
import CollapsibleContent from "component/layout/CollapsibleContent";
import Sider from "component/layout/Sider";
import Loader from "component/Loader";

const BaseLayout = (
	{
		header,
		router,
		menu,
		footer,
	}
) => {
	return (
		<Loader>
			<Layout>
				{header}
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
	);
};

export {
	BaseLayout,
};
