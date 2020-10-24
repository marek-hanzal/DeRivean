import Client from "component/system/Config";
import Discovery from "component/system/Discovery";
import Session from "component/system/Session";
import {Suspense} from "react";
import {Helmet} from "react-helmet";
import {BrowserRouter} from "react-router-dom";
import PublicSite from "site/public/site/PublicSite";
import RootSite from "site/root/site/RootSite";
import LoaderView from "./view/LoaderView";

const DeRivean = () =>
	<BrowserRouter>
		<Helmet titleTemplate="DeRivean | %s"/>
		<Suspense fallback={<LoaderView/>}>
			<Client>
				<Discovery>
					<Session sites={{
						public: <PublicSite/>,
						// game: <GameRouter/>,
						root: <RootSite/>,
					}}/>
				</Discovery>
			</Client>
		</Suspense>
	</BrowserRouter>
;

export default DeRivean;
