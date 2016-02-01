/**
 * 公共方法名
 */


/**
 * 调用其他 js
 * @param name  JS文件名
 */

var createJS = function (name) {
    new_element=document.createElement('script');
    new_element.setAttribute('type', 'text/javascript');
    new_element.setAttribute('src', 'js/' + name + '.js');
    document.body.appendChild(new_element);
}

/**
 * 获取主舞台节点
 * @returns {Element}
 */
var getStage = function () {
    return document.getElementById('stage').getContext("2d");
}

/**
 * 按键获取
 * @type {{}}
 */
var keysDown = {};

addEventListener("keydown", function (e) {
    keysDown[e.keyCode] = true;
    console.log(keysDown);
}, false);

addEventListener("keyup", function (e) {
    delete keysDown[e.keyCode];
}, false);

