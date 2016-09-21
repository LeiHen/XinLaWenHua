// JavaScript Document

/**
 * @name     :collectWeb
 * @author   :Nice
 * @dependent:收藏本站
 */
function addFavorite() {

    if (window.sidebar && window.sidebar.addPanel) {
    // Mozilla Firefox Bookmark
        window.sidebar.addPanel(document.title, window.location.href, '');
    } else if (window.external && ('AddFavorite' in window.external)) {
    // IE Favorite
        window.external.AddFavorite(location.href, document.title);
    } else if (window.opera && window.print) {
    // Opera Hotlist
        this.title = document.title;
        return true;
    } else {
    // webkit - safari/chrome
        alert('请使用' + (navigator.userAgent.toLowerCase().indexOf('mac') != -1 ? 'Command/Cmd' : 'CTRL') + ' + D 收藏！');
    }

}
/* @end **/


/**
 * @name     :isWeiXin
 * @author   :Nice
 * @dependent:
 * @date     :2016-06-29
 * @explain  :判断是否微信浏览器
 *
 * [isWeiXin description]
 * @return {[boolean]} []
 */
function isWeiXin(){
    var ua = window.navigator.userAgent.toLowerCase();
    if(ua.match(/MicroMessenger/i) == 'micromessenger'){
        return true;
    }else{
        return false;
    }
}
/* @end **/

/**
 * @name     :browserVersions
 * @author   :Nice
 * @dependent:
 * @date     :2016-06-29
 * @explain  :判断访问终端
 *
 * [browserVersions description]
 */
function browserVersions(){
    var browser={
        versions:function(){
            var u = navigator.userAgent, app = navigator.appVersion;
            return {
                trident: u.indexOf('Trident') > -1, //IE内核
                presto: u.indexOf('Presto') > -1, //opera内核
                webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
                gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1,//火狐内核
                mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
                ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
                android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或者uc浏览器
                iPhone: u.indexOf('iPhone') > -1 , //是否为iPhone或者QQHD浏览器
                iPad: u.indexOf('iPad') > -1, //是否iPad
                webApp: u.indexOf('Safari') == -1, //是否web应该程序，没有头部与底部
                weixin: u.indexOf('MicroMessenger') > -1, //是否微信 （2015-01-22新增）
                qq: u.match(/\sQQ/i) == " qq" //是否QQ
            };
        }(),
        language:(navigator.browserLanguage || navigator.language).toLowerCase()
    };

    //判断是否IE内核
    if(browser.versions.trident){ alert("is IE"); }
    //判断是否webKit内核
    if(browser.versions.webKit){ alert("is webKit"); }
    //判断是否移动端
    if(browser.versions.mobile||browser.versions.android||browser.versions.ios){ alert("移动端"); }
    //检测浏览器语言

    currentLang = navigator.language;
    //判断除IE外其他浏览器使用语言
    if(!currentLang){
        //判断IE浏览器使用语言
        currentLang = navigator.browserLanguage;
    }
    alert(currentLang);
}
/* @end **/







/*-------------------------------------- 验证 ---------------------------------------*/




/*-------------------------------------- Others ---------------------------------------*/




/*-------------------------------------- Others ---------------------------------------*/





/*-------------------------------------- Others ---------------------------------------*/















/**
* @name		:
* @author	:Nice
* @version	:
* @type		:基类
* @explain	:
* @relating	:
* @dependent:
*/

/* @end **/
