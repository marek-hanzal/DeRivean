import Session from "component/Session";
import React, { Suspense } from "react";
import { Helmet } from "react-helmet";
import { BrowserRouter } from "react-router-dom";
import InternalRouter from "site/internal/router/InternalRouter";
import PublicRouter from "site/public/router/PublicRouter";
import RootSite from "site/root/site/RootSite";
import Client from "./component/Config";
import Discovery from "./component/Discovery";
import LoaderView from "./view/LoaderView";

const DeRivean = () =>
	<BrowserRouter>
		<Helmet titleTemplate="DeRivean | %s"/>
		<Suspense fallback={<LoaderView/>}>
			<Client href="/client.json">
				<Discovery>
					<Session sites={{
						public:   <PublicRouter/>,
						internal: <InternalRouter/>,
						root:     <RootSite/>,
					}}/>
				</Discovery>
			</Client>
		</Suspense>
	</BrowserRouter>
;

export default DeRivean;
