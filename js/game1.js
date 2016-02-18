define(['util'], function (util) {
    var current = 0;var top = 300;var left = 250;var height = 600;var width = 600;
    var font = "30px 微软雅黑";var fillStyle = "white";var flushFlag = false;
    var whenEnding;var $;
    var RPC1='images/day1/RPC1.png';
    var RPC2='images/day1/RPC2.png';
    var dialog='images/day1/dialog.png';
    var background = 'images/day1/bg.jpg';
    var gut={index:0,talks:[{spokesman:RPC1,talk:"你好这是第一句台词"},
        {spokesman:RPC2,talk:"你好这是第二句台词"},
        {spokesman:RPC1,talk:"你好这是第三句台词"}]};

    var init = function (config) {
        $=config.story.Renderer.getCanvas();
        util.R.load([background,dialog,RPC1,RPC2]);
        util.R.onReady(function(){
            flushFlag=true;
        });
        whenEnding=config.whenEnding;
    };
    var listener=function(){
        util.setListener(function(type){
            switch(type){
                case "enter":
                    if(gut.index<gut.talks.length-1){
                        gut.index++;
                        flushFlag=true;
                    }else{
                        whenEnding();
                    }
                    break;
            }
        });
    }
    var renderBackground = function () {
        $.drawImage(util.R.get(background), 0, 0, width, height);
        $.drawImage(util.R.get(dialog), 0, 450, 580, 120);
        $.font = font;
        $.fillStyle = fillStyle;
    };
    var renderGut= function () {
        $.drawImage(util.R.get(gut.talks[gut.index].spokesman), 40,320,150,150);
        $.fillText(gut.talks[gut.index].talk,140,500);
    };
    var render = function () {
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
        listener:listener,
        init: init,//three two one action!!!
        stop:stop,//
        render: render
    };
});