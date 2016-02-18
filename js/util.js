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
    var setListener = function (context) {
        Listener = context;
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
    };

    var R = {
        RCache:{},
        loading:[],
        readyCallbacks:[],
        // Load an image url or an array of image urls
        load:function(urlOrArr){
            if (urlOrArr instanceof Array) {
                urlOrArr.forEach(function (url) {
                    R._load(url);
                });
            }
            else {
                R._load(urlOrArr);
            }
            },
        _load:function (url) {
            if (this.RCache[url]) {
                return RCache[url];
            }
            else {
                var img = new Image();
                img.onload = function () {
                    R.RCache[url] = img;
                    if (R.isReady()) {
                        R.readyCallbacks.forEach(function (func) {
                            func();
                        });
                    }
                };
                this.RCache[url] = false;
                img.src = url;
            }
            },
        get:function (url) {
            return R.RCache[url];
            },
        isReady:function () {
            var ready = true;
            for (var k in this.RCache) {
                if (R.RCache.hasOwnProperty(k) && !R.RCache[k]) {
                    ready = false;
                }
            }
            return ready;
            },
        onReady:function (func) {
            R.readyCallbacks.push(func);
        }
    };
    var Sprite = function (ctx, url, pos, size, speed, frames, dir, once) {
        this.pos = pos;
        this.size = size;
        this.speed = typeof speed === 'number' ? speed : 0;
        this.frames = frames;
        this._index = 0;
        this.url = url;
        this.dir = dir || 'horizontal';
        this.once = once;
        this.ctx = ctx;
        var update = function (dt) {
            this._index += this.speed * dt;
        }
        var render = function () {
            var frame;
            if (this.speed > 0) {
                var max = this.frames.length;
                var idx = Math.floor(this._index);
                frame = this.frames[idx % max];

                if (this.once && idx >= max) {
                    this.done = true;
                    return;
                }
            }
            else {
                frame = 0;
            }
            var x = this.pos[0];
            var y = this.pos[1];

            if (this.dir == 'vertical') {
                y += frame * this.size[1];
            }
            else {
                x += frame * this.size[0];
            }
            this.ctx.drawImage(Rs.get(this.url),
                x, y,
                this.size[0], this.size[1],
                0, 0,
                this.size[0], this.size[1]);
        }
        return {
            render: render,
            update: update
        }
    }
    return {
        // KeyBoard: KeyBoard,
        Sprite: Sprite,
        R:R,
        setListener: setListener,
        shadowText: shadowText,
        extend: extend,
        toColorRgb: toColorRgb
    };
});