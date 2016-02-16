define(['base','canvas'],function (base,$) {
    var current=0;
    var items=['新的开始','旧的回忆','我是什么鬼'];
    var top=300;
    var left=250;
    var height=600;
    var width=600;
    var bgImage=new Image();
    var background='images/main/bg.jpg';
    var font="30px 微软雅黑";
    var fillStyle="red";
    var flushFlag=false;
    var stepY=100;
    var clickFn;
    base.AddListenerKeyBoard();
    base.Event.on("up", function () {
        current++
        flushFlag=true;
    });
    base.Event.on("down", function () {
        current--
        flushFlag=true;
    });
    base.Event.on("enter", function () {
        console.log(Math.abs((current) % items.length));
    });
    var init=function(clickFn){
        bgImage.src = background;
        bgImage.onload = function () {
            flushFlag = true;
        };

    }
    var renderBackground=function(){
        $.drawImage(bgImage, 0, 0, width, height);
        $.font = font;
        $.fillStyle = fillStyle;
    }
    var renderMenu=function(){
        for(i=0;i<items.length;i++){
            if(i==Math.abs((current) % items.length)){
                $.fillText(items[i]+"←", left,top+i*stepY);
            }else{
                $.fillText(items[i], left,top+i*stepY);
            }
        }
    }
    var render = function () {
        if(flushFlag==true) {
            renderBackground();
            renderMenu();
            flushFlag=false;
        }
    }
    return {
        init: init,
        render:render
    };
});