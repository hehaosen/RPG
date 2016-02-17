define(['menu'], function (menu) {
    var _canvasEl;
    var _FPS = {
        fps: 10,
        now: null,
        then: Date.now(),
        delta: null
    };
    _FPS.interval = 1000 / _FPS.fps;

    var init = function () {

    }
    var addScene = function () {
        menu.init({
            canvas: _canvasEl,
            items: [{
                text: '新的开始', click: function () {
                    menu.fadeout(function () {
                        console.log("进入新的开始");
                    });
                }
            }, {
                text: '旧的回忆', click: function () {
                    console.log("旧的回忆");
                }
            }, {
                text: '我是什么鬼', click: function () {
                    console.log("进入我是什么鬼");
                }
            }]
        });
    }
    var Render = {
        loadCanvas: function (el) {
            _canvasEl = el;
        },
        start: function (FPS) {
            _FPS.fps = FPS.FPS;
            Render.render();
        },
        render: function () {
            requestAnimationFrame(Render.render);
            _FPS.now = Date.now();
            _FPS.delta = _FPS.now - _FPS.then;
            if (_FPS.delta > _FPS.interval) {
                _FPS.then = _FPS.now - (_FPS.delta % _FPS.interval);
                Render.renderFrame();
                Render.render();
            }
        },
        renderFrame: function () {
            menu.render();
        }
    }
    return {
        Renderer: Render,
        init: init,
        addScene: addScene
    };
});