import Client from "component/system/Client";
import Language from "component/system/Language";
import Session from "component/system/Session";
import {Suspense} from "react";
import {Helmet} from "react-helmet";
import {BrowserRouter} from "react-router-dom";
import {default as PublicSite} from "site/public/site/Site";
import {default as RootSite} from "site/root/site/Site";
import LoaderView from "./view/LoaderView";

const DeRivean = () =>
	<BrowserRouter>
		<Helmet titleTemplate="DeRivean | %s"/>
		<Suspense fallback={<LoaderView/>}>
			<Client>
				<Language>
					<Session sites={{
						public: <PublicSite/>,
						// game: <GameRouter/>,
						root: <RootSite/>,
					}}/>
				</Language>
			</Client>
		</Suspense>
	</BrowserRouter>
;

export default DeRivean;
