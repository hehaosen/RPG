define(function () {
    var toColorRgb = function (sColor) {
        if (sColor) {
            if (sColor.length === 4) {
                var sColorNew = "#";
                for (var i = 1; i < 4; i += 1) {
                    sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1));
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
    var extend = function (a, b) {
        for (var tem in b) {
            a[tem] = b[tem];
        }
    }
    var Listener;
    var setListener=function(context){
        Listener=context;
    }
    addEventListener("keydown", function (e) {
        if (e.keyCode == 38) {
            Listener("up");
        } //上
        if (e.keyCode == 40) {
            Listener("down");
        } //下
        if (e.keyCode == 13 || e.keyCode == 32) {
            Listener("enter");
        }//回车 or 空格
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
                _self.globalAlpha = 0.5;
                _self.conf.stage.fillText(_self.conf.text, _self.conf.x, _self.conf.y);
            },
            this.animation = function () {

            }
    }
    return {
       // KeyBoard: KeyBoard,
        setListener:setListener,
        shadowText: shadowText,
        extend: extend,
        toColorRgb: toColorRgb
    };
});