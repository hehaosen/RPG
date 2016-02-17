define(['util'], function (util) {
    var current = 0;
    var top = 300;
    var left = 250;
    var height = 600;
    var width = 600;
    var bgImage = new Image();
    var dialogImage=new Image();
    var background = 'images/day1/bg.jpg';
    var font = "30px 微软雅黑";
    var fillStyle = "white";
    var flushFlag = false;
    var listenerFlag=false;

    var $;
    var context=this;
    var RPC1={
        image:new Image(),
        face:'images/day1/RPC1.png'
    };
    var RPC2={
        image:new Image(),
        face:'images/day1/RPC2.png'
    }
    var gut={index:0,talks:[{spokesman:RPC1,talk:"你好这是第一句台词"},
        {spokesman:RPC2,talk:"你好这是第二句台词"},
        {spokesman:RPC1,talk:"你好这是第三句台词"}]};
    var ListenerKeyBoard=function(){
        util.setListener(function(type){
            switch(type){
                case "enter":
                    if(gut.index<gut.talks.length-1){
                        gut.index++;
                        flushFlag=true;
                    }
                    break;
            }
        });
    }
    var init = function (config) {
        $=config.story.Renderer.getCanvas();
        bgImage.src = background;
        dialogImage.src='images/day1/dailog.png';
        bgImage.onload = function () {
            flushFlag = true;
        };
        dialogImage.onload=function(){
            flushFlag = true;
        }
       RPC1.image.src=RPC1.face;
        RPC2.image.src=RPC2.face;
        RPC1.image.onload=function(){
            flushFlag=true;
        }
        RPC2.image.onload=function(){
            flushFlag=true;
        }
    };

    var renderBackground = function () {
        $.drawImage(bgImage, 0, 0, width, height);
        $.drawImage(dialogImage, 0, 450, 580, 120);
        $.font = font;
        $.fillStyle = fillStyle;
    };
    var renderGut= function () {
        $.drawImage(gut.talks[gut.index].spokesman.image, 40,320,150,150);
        $.fillText(gut.talks[gut.index].talk,140,500);
    };
    var render = function () {
        if(listenerFlag==false){
            ListenerKeyBoard();
            listenerFlag=true;
        }
        if (flushFlag == true) {
            renderBackground();
            renderGut();
            flushFlag = false;
        }
    };
    var stop=function(){
        //base.RemoveListenerKeyBoard();
    };
    return {
        init: init,//three two one action!!!
        stop:stop,//
        render: render
    };
});