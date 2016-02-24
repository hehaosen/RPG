define(['util','talk'], function (util,talk) {
    var flushFlag = false;
    var whenEnding;
    var $;
    var background = 'images/day1/bg.jpg';
    var gut={
        talks:[{spokesman:'images/day1/RPC1.png',talk:"你好这是第一句台词"},
            {spokesman:'images/day1/RPC2.png',talk:"你好这是第二句台词"},
            {spokesman:'images/day1/RPC1.png',talk:"你好这是第三句台词"}]};

    var listener=function(){
        util.setListener(function(type){
            switch(type){
                case "enter":
                    if(talk.next()){
                        flushFlag=true;
                    }else{
                        whenEnding();
                    }
                    break;
            }
        });
    }
    var init = function (config) {
        flushFlag = false;
        $=config.story.Renderer.getCanvas();
        talk.init(gut);
        util.R.load([background]);
        util.R.onReady(function(){
            flushFlag=true;
        });
        whenEnding=config.whenEnding;
    };
    var render = function () {
        if (flushFlag == true) {
            $.drawImage(util.R.get(background), 0, 0);
            $.drawImage(talk.render(),0,330);
            flushFlag = false;
        }
    };

    return {
        listener:listener,
        init: init,
        render: render
    };
});