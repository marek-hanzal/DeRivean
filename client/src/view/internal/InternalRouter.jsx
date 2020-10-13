import React from 'react';
import {Route} from 'react-router-dom';
import DashboardView from './DashboardView';

const InternalRouter = () =>
	<>
		<Route exact path="/" component={DashboardView}/>
		{/*<Route path={InvoicePath.ROOT} component={InvoiceRouter}/>*/}
	</>
;

export default InternalRouter;
