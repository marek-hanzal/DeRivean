import React from 'react';
import {Helmet} from "react-helmet";
import {Button, Result} from "antd";
import {withTranslation} from "react-i18next";

const NotFoundView = ({t}) =>
	<>
		<Helmet title={t('error.not-found.title')}/>
		<Result
			status="404"
			title={t('error.not-found.title')}
			subTitle={t('error.not-found.body')}
			extra={<Button type="primary" onClick={() => window.location.href = '/'}>{t('common.homepage')}</Button>}
		/>
	</>
;

export default withTranslation()(NotFoundView);
