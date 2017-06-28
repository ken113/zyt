/**
*设置cookie值
*/
export function setCookie( name,value,time ){
	
	let exp = new Date();
	if( time ){
		exp.setTime( exp.getTime() + time*24*60*60*1000 );
	}else{
		exp.setTime( exp.getTime() + 10*60*1000 );//默认10分钟
	}
	
	document.cookie = name + "="+ escape(value) + ";path=/;expires=" + exp.toGMTString();
}

/**
*获取cookie值
*/
export function getCookieValue(name) {
	let cookieValue = null;
	if( document.cookie && document.cookie != '' ){
		const cookies = document.cookie.split(';');
		for(let i = 0; i < cookies.length; i++ ){

			let cookie = cookies[i].trim();
			if( cookie.substring(0, name.length + 1) == (name + '=')) {
				cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
				break;
			}
		}
	}
	return cookieValue;
}

/**
*删除cookie值
*/
export function delCookie(name) {
	var exp = new Date();
	exp.setTime( exp.getTime() - 60 * 1000 );
	var cval = getCookieValue(name);

	document.cookie = name + "=" + cval + ";path=/;expires=" + exp.toUTCString();
}

/**
*获取URL上面的值
*/
export function getUrlParam( param ){
	const reg = new RegExp(`${param}=([^&]*)(&?)`, 'i'),
		paramValue = location.hash.match(reg);
	return paramValue ? paramValue[1] : '';
}

/**
*日期转换
*/
export function convertDate(date, format) {
    let str = format;
    const o = {
        'M+': date.getMonth() + 1,
        'D+': date.getDate(),
        'h+': date.getHours(),
        'm+': date.getMinutes(),
        's+': date.getSeconds(),
    };
    if (/(Y+)/.test(format)) {
        str = str.replace(RegExp.$1,
                (date.getFullYear().toString()).substr(4 - RegExp.$1.length));
    }

    for (const k in o) { 
        if (new RegExp(`(${k})`).test(format)) {
            str = str.replace(RegExp.$1,
                (RegExp.$1.length === 1) ?
                o[k] : (`00${o[k]}`.substr((o[k].toString()).length)));
        }
    }

    return str;
};

//验证方法集合
export const validate = {

	isNum( str ){
		return /^[0-9]*$/.test( str );
	},
	isEmail( str ){
		return /^(.+)@(.+)$/.test( str );
	},
	isCN( str ){
		return /^[\u4E00-\u9FA5\uF900-\uFA2D]+$/.test( str );
	}
}
