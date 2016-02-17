define(['util'], function (util) {
    var current = 0;
    var items =[];
    var top = 300;
    var left = 250;
    var height = 600;
    var width = 600;
    var bgImage = new Image();
    var background = 'images/main/bg.jpg';
    var font = "30px 微软雅黑";
    var fillStyle = "red";
    var flushFlag = false;
    var fadeoutFlag=false;
    var listenerFlag=false;
    var fadeoutAlpha=0;
    var fadeoutCallback;
    var stepY = 100;
    var $;
    var context=this;
    var ListenerKeyBoard=function(){
        util.setListener(function(type){
            switch(type){
                case "up":
                    console.log("up");
                    current++;
                    flushFlag = true;
                    break;
                case "down":
                    current--;
                    flushFlag = true;
                    break;
                case "enter":
                    items[Math.abs((current) % items.length)].click();
                    break;
            }
        });
    }
    var init = function (config) {
        $=config.story.Renderer.getCanvas();
        items=config.items;
        bgImage.src = background;
        bgImage.onload = function () {
            flushFlag = true;
        };

    };

    var renderBackground = function () {
        $.drawImage(bgImage, 0, 0, width, height);
        $.font = font;
        $.fillStyle = fillStyle;
    };
    var renderMenu = function () {
        for (var i = 0; i < items.length; i++) {
            if (i == Math.abs((current) % items.length)) {
                $.fillText(items[i].text + "←", left, top + i * stepY);
            } else {
                $.fillText(items[i].text, left, top + i * stepY);
            }
        }
    };
    var render = function () {
        if(listenerFlag==false){
            ListenerKeyBoard();
            listenerFlag=true;
        }
        if (flushFlag == true) {
            renderBackground();
            renderMenu();
            flushFlag = false;
        }
        if(fadeoutFlag==true){
            if(fadeoutAlpha<=30) {
                renderFadeout();
            }else{
                fadeoutFlag=false;
                fadeoutCallback();
            }
        }
    };
    var renderFadeout=function(){
        $.fillStyle = 'rgba(181, 25, 25, ' + (fadeoutAlpha++) / 100 + ')';  //填充的颜色
        $.linewidth = 10;  //边框宽
        $.fillRect(0, 0, width, height);  //填充颜色 x y坐标 宽 高
    };
    var fadeout=function(fn){
        fadeoutFlag=true;
        fadeoutAlpha=0;
        fadeoutCallback=fn;
    };
    var stop=function(){
        //base.RemoveListenerKeyBoard();
    };
    return {
        init: init,//three two one action!!!
        stop:stop,//
        render: render,
        fadeout:fadeout
    };
});