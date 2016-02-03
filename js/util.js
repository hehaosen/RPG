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
var $ = function () {
    return document.getElementById('stage').getContext("2d");
}

/**
 * 按键获取
 * @type {{}}
 */

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
var KeyBoard = {
    _listeners: {},
    on: function(type, fn) {
        if (typeof this._listeners[type] === "undefined") {
            this._listeners[type] = [];
        }
        if (typeof fn === "function") {
            this._listeners[type].push(fn);
        }
        return this;
    },
    fire: function(type) {
        var arrayEvent = this._listeners[type];
        if (arrayEvent instanceof Array) {
            for (var i=0, length=arrayEvent.length; i<length; i+=1) {
                if (typeof arrayEvent[i] === "function") {
                    arrayEvent[i]({
                        type: type
                    });
                }
            }
        }
        return this;
    },
    unfire: function(type, fn) {
        var arrayEvent = this._listeners[type];
        if (typeof type === "string" && arrayEvent instanceof Array) {
            if (typeof fn === "function") {
                for (var i=0, length=arrayEvent.length; i<length; i+=1){
                    if (arrayEvent[i] === fn){
                        this._listeners[type].splice(i, 1);
                        break;
                    }
                }
            } else {
                delete this._listeners[type];
            }
        }
        return this;
    }
};
addEventListener("keydown", function (e) {
    if (e.keyCode == 38) {
        KeyBoard.fire("up");
    } //上
    if (e.keyCode == 40) {
        KeyBoard.fire("down");
    } //下
    //回车 or 空格
    if (e.keyCode == 13  || e.keyCode == 32) {
        KeyBoard.fire("enter");
    }
}, false);
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