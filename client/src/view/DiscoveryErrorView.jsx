import {Button, Result} from 'antd';
import React from 'react';
import {withTranslation} from 'react-i18next';

const DiscoveryErrorView = ({t}) =>
	<Result
		status="500"
		title={t('error.discovery.title')}
		subTitle={t('error.discovery.body')}
		extra={<Button type="primary" onClick={() => window.location.reload()}>{t('common.refresh')}</Button>}
	/>
;

export default withTranslation()(DiscoveryErrorView);
