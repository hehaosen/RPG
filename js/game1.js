define(['util'], function (util) {
    var current = 0;var top = 300;var left = 250;var height = 600;var width = 600;
    var font = "30px 微软雅黑";var fillStyle = "white";var flushFlag = false;
    var whenEnding;var $;
    var RPC1='images/day1/RPC1.png';
    var RPC2='images/day1/RPC2.png';
    var dialog='images/day1/dialog.png';
    var background = 'images/day1/bg.jpg';
    var map='images/game1/map.png';
    var mapalias={
        D1:[0,0],//地砖1
        D2:[0,1],//地砖2
        L1:[0,2],//小牌子
        F1:[0,3],//花1
        G1:[0,4],//草1
        W1:[0,5],//水1
        W2:[0,6],//水2
        W3:[0,7],//水3
        T1:[1,0],//树1
        T2:[2,0],//树1
        F2:[1,1],//花2
        B1:[3,0],//桥1
        B2:[3,1],//桥2
        B3:[3,2]//桥3
    }
    var maper;
    var flyer={
        image:'images/game1/sprites.png',
        pos:[0,78],
        size:[80, 39],
        speed:1,
        frames:[0, 1, 2, 3, 2, 1],
        sprite:null
    };
    var flyer1={
        image:'images/game1/sprites.png',
        pos:[0,78],
        size:[80, 39],
        speed:1,
        frames:[0, 1, 2, 3, 2, 1],
        sprite:null
    };
    var flayerWhere=[100,100];
    var flayer1Where=[200,200];
    var mapCTX;
    var gut={index:0,talks:[{spokesman:RPC1,talk:"你好这是第一句台词"},
        {spokesman:RPC2,talk:"你好这是第二句台词"},
        {spokesman:RPC1,talk:"你好这是第三句台词"}]};

    var init = function (config) {
        $=config.story.Renderer.getCanvas();
        mapCTX=util.CTX();
        util.R.load([background,dialog,RPC1,RPC2,flyer.image,map]);
        util.R.onReady(function(){
            whenEnding=config.whenEnding;
            flyer.sprite=util.Sprite($,flyer.image,flyer.pos ,flyer.size ,flyer.speed,flyer.frames);
            flyer1.sprite=util.Sprite($,flyer1.image,flyer1.pos ,flyer1.size ,flyer1.speed,flyer1.frames);
            maper=util.Map(mapCTX.context,map,23,mapalias);
            maper.render([
                ["D1","D1","D1","D1","D1","D1","D1","D1","D1","D1","D1","D1","D1","D1","D1","D1","D1","D1","D1","D1","D1","D1","D1","D1","D1","D1"],
                ["D2","D2","D2","D2","T1","D2","D2","D2","D2","D2","D2","D2","T1","D2","D2","D2","D2","D2","D2","D2","D2","D2","D2","D2","D2","D2"],
                ["D2","D2","D2","D2","T2","D2","D2","D2","D2","D2","D2","D2","T2","D2","D2","D2","D2","D2","D2","D2","D2","D2","D2","D2","D2","D2"],
                ["D2","D2","D2","D2","D2","D2","D2","D2","D2","D2","D2","D2","T1","D2","D2","D2","D2","D2","D2","D2","D2","D2","D2","D2","D2","D2"],
                ["D2","D2","D2","D2","D2","D2","D2","D2","D2","D2","D2","D2","T2","D2","D2","D2","D2","D2","D2","D2","D2","D2","D2","D2","D2","D2"],
                ["D2","D2","D2","D2","T1","D2","D2","D2","D2","D2","D2","D2","T1","D2","D2","D2","D2","D2","D2","D2","D2","D2","D2","D2","D2","D2"],
                ["D2","D2","D2","D2","T2","D2","D2","D2","D2","D2","D2","D2","T2","D2","D2","D2","D2","D2","D2","D2","D2","D2","D2","D2","D2","D2"],
                ["D2","D2","D2","D2","D2","D2","D2","D2","D2","D2","D2","D2","T1","D2","D2","D2","D2","D2","D2","D2","D2","D2","D2","D2","D2","D2"],
                ["D2","D2","D2","D2","D2","D2","D2","D2","D2","D2","D2","D2","T2","D2","D2","D2","D2","D2","D2","D2","D2","D2","D2","D2","D2","D2"],
                ["D2","D2","D2","D2","T1","D2","D2","D2","D2","D2","D2","D2","T1","D2","D2","D2","D2","D2","D2","D2","D2","D2","D2","D2","D2","D2"],
                ["D2","D2","D2","D2","T2","D2","D2","D2","D2","D2","D2","D2","T2","D2","D2","D2","D2","D2","D2","D2","D2","D2","D2","D2","D2","D2"],
                ["D2","D2","D2","D2","D2","D2","D2","D2","D2","D2","D2","D2","T1","D2","D2","D2","D2","D2","D2","D2","D2","D2","D2","D2","D2","D2"],
                ["D2","D2","D2","D2","D2","D2","D2","D2","D2","D2","D2","D2","T2","D2","D2","D2","D2","D2","D2","D2","D2","D2","D2","D2","D2","D2"],
                ["D2","D2","D2","D2","T1","D2","D2","D2","D2","D2","D2","D2","T1","D2","D2","D2","D2","D2","D2","D2","D2","D2","D2","D2","D2","D2"],
                ["D2","D2","D2","D2","T2","D2","D2","D2","D2","D2","D2","D2","T2","D2","D2","D2","D2","F2","D2","D2","D2","D2","D2","D2","D2","D2"],
                ["D2","D2","D2","D2","D2","D2","D2","D2","D2","D2","D2","D2","T1","D2","D2","D2","F2","D2","F2","D2","D2","D2","D2","D2","D2","D2"],
                ["D2","D2","D2","D2","D2","D2","D2","D2","D2","D2","D2","D2","T2","D2","D2","F2","D2","D2","D2","F2","D2","D2","D2","D2","D2","D2"],
                ["D2","D2","D2","D2","T1","D2","F2","D2","D2","D2","D2","D2","T1","D2","D2","D2","F2","D2","F2","D2","D2","D2","D2","D2","D2","D2"],
                ["D2","D2","D2","D2","T2","F2","D2","F2","D2","D2","D2","D2","T2","D2","D2","D2","D2","F2","D2","D2","D2","D2","D2","D2","D2","D2"],
                ["D2","D2","D2","D2","F2","D2","D2","D2","F2","D2","D2","D2","T1","D2","D2","D2","D2","D2","D2","D2","D2","D2","D2","D2","D2","D2"],
                ["D2","D2","D2","D2","D2","F2","D2","F2","D2","D2","D2","D2","T2","D2","D2","D2","D2","D2","D2","D2","D2","D2","D2","D2","D2","D2"],
                ["D2","D2","D2","D2","T1","D2","F2","D2","D2","D2","D2","D2","T1","D2","D2","D2","D2","D2","D2","D2","D2","D2","D2","D2","D2","D2"],
                ["D2","D2","D2","D2","T2","D2","D2","D2","D2","D2","D2","D2","T2","D2","D2","D2","D2","D2","D2","D2","D2","D2","D2","D2","D2","D2"],
                ["D2","D2","D2","D2","D2","D2","D2","D2","D2","D2","D2","D2","T1","D2","D2","D2","D2","D2","D2","D2","D2","D2","D2","D2","D2","D2"],
                ["D2","D2","D2","D2","D2","D2","D2","D2","D2","D2","D2","D2","T2","D2","D2","D2","D2","D2","D2","D2","D2","D2","D2","D2","D2","D2"],
                ["D1","D1","D1","D1","D1","D1","D1","D1","D1","D1","D1","D1","D1","D1","D1","D1","D1","D1","D1","D1","D1","D1","D1","D1","D1","D1"]
            ]);

            flushFlag=true;
        });



    };
    var listener=function(){
        util.setListener(function(type){
            switch(type){
                case "enter":
                    if(gut.index<gut.talks.length-1){
                        gut.index++;
                    }else{
                        whenEnding();
                    }
                    break;
                case "down":
                    flayerWhere[1]++;
                    flayer1Where[1]--;
                    flyer.sprite.update(1);
                    flyer1.sprite.update(1);
                    break;
                case "up":
                    flayerWhere[1]--;
                    flayer1Where[1]++;
                    flyer.sprite.update(1);
                    flyer1.sprite.update(1);
                    break;
                case "right":
                    flayerWhere[0]++;
                    flayer1Where[0]--;
                    flyer.sprite.update(1);
                    flyer1.sprite.update(1);
                    break;
                case "left":
                    flayerWhere[0]--;
                    flayer1Where[0]++;
                    flyer.sprite.update(1);
                    flyer1.sprite.update(1);
                    break;

            }
            flushFlag=true;
        });
    }
    var renderBackground = function () {
        //$.drawImage(util.R.get(background), 0, 0, width, height
        $.drawImage(mapCTX.canvas,0,0);
        $.drawImage(util.R.get(dialog), 0, 450, 580, 120);
        $.font = font;
        $.fillStyle = fillStyle;
    };
    var renderGut= function () {
        flyer.sprite.render(flayerWhere);
        flyer1.sprite.render(flayer1Where);
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