define(function () {
    var _canvasEl;
    var _sceneList=[];
    var _sceneCurrentIndex=0;
    var _FPS = {
        fps: 10,
        now: null,
        then: Date.now(),
        delta: null
    };
    _FPS.interval = 1000 / _FPS.fps;
    var init = function () {
    }
    var Scenes ={
        Add:function (scene) {
            _sceneList.push(scene);
        },
        Play:function(name){
            for(i=0;i< _sceneList.length;i++){
                if(_sceneList[i].name==name){
                    _sceneCurrentIndex=i;
                }
            }
        }
    }
    var Render = {
        loadCanvas: function (el) {
            _canvasEl = el;
        },
        getCanvas:function(){
            return _canvasEl;
        }
        ,
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
            if(!_sceneList[_sceneCurrentIndex].scene.isListener){
                _sceneList[_sceneCurrentIndex].scene.listener();
                _sceneList[_sceneCurrentIndex].scene.isListener=true;
            }
            _sceneList[_sceneCurrentIndex].scene.render();
        }
    }
    return {
        Renderer: Render,
        init: init,
        Scenes:Scenes
    };
});