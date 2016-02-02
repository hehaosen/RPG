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
 * 16进制颜色转为RGB格式
 * @returns array[R,G,B]
 */
toColorRgb = function(sColor){
    if (sColor) {
        if (sColor.length === 4) {
            var sColorNew = "#";
            for(var i = 1; i < 4; i += 1){
                sColorNew += sColor.slice(i, i+1).concat(sColor.slice(i, i + 1));
            }
            sColor = sColorNew;
        }
        //处理六位的颜色值
        var sColorChange = [];
        for (var i = 1; i < 7; i += 2) {
            sColorChange.push(parseInt("0x" + sColor.slice(i, i + 2)));
        }
        return sColorChange;
    } else {
        return sColor;
    }
};

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

/**
 * a 继承 b
 * @param a
 * @param b
 */

var extend = function (a, b) {
    for (var tem in b) {
        a[tem] = b[tem];
    }
}
/**
 * 渐变文字
 */
var shadowText = function () {
    var _self = this;
    this.conf = {
        stage: getStage(),//主舞台节点
        text: '默认文字',//显示文字
        fontSize: 30, //默认字体大小
        color: '#fffff',//默认文字颜色
        x: 0,//x坐标
        y: 0
    },
    this.init = function (data) {
        extend(_self.conf, data);
        console.log(_self.conf);
        _self.conf.stage.font = _self.conf.fontSize + 'px 微软雅黑';
        _self.conf.stage.fillStyle = _self.conf.color;
        _self.globalAlpha=0.5;
        _self.conf.stage.fillText(_self.conf.text, _self.conf.x, _self.conf.y);
    },
    this.animation = function () {

    }
}