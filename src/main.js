import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router,Route,Link} from 'react-router-dom'
import 'element-theme-default';
import { i18n } from 'element-react'
import locale from 'element-react/src/locale/lang/en'
import { addLocaleData,IntlProvider,FormattedMessage } from 'react-intl';
import zh from 'react-intl/locale-data/zh';
import en from 'react-intl/locale-data/en';
import intl from 'intl';
import zh_CN from './lang/zh_CN';
import en_US from './lang/en_US';
import { getCookieValue } from './lib/common'
import { Provider } from 'mobx-react';
import stores from './stores'
import RouterDom from './router'

//import './styles/normalize.css';
import './../font-awesome-4.7.0/css/font-awesome.css';
import './styles/common.css';

addLocaleData([...en, ...zh]);

window.CONFIG.lang = getCookieValue('lang') || 'zh-CN';

let lang = 'zh',
	messages = zh_CN;

if( CONFIG.lang === 'en-US' ){
	i18n.use(locale);
	lang = 'en';
	messages = en_US;
}


const app = (
	<IntlProvider locale={lang} messages={messages} >
		<Provider {...stores} >
			<RouterDom />
		</Provider>
	</IntlProvider>
);

ReactDom.render( app ,document.getElementById('app'));