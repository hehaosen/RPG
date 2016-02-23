define(['util'], function (util) {
    var font = "30px 微软雅黑";
    var fontColor = "white";
    var face='images/day1/dialog.png';
    var gut;
    var gutIndex;
    var ctx;
    var init = function (gutIn) {
        ctx=util.CTX(600,300);
        gut=gutIn;
        gutIndex=0;
        for(var v in gutIn.talks){
                util.R.load(gutIn.talks[v].spokesman);
        }
        util.R.load(face);
    };
    var render=function(){
        ctx.context.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
        ctx.context.drawImage(util.R.get(face),0,130,580,120);
        ctx.context.drawImage(util.R.get(gut.talks[gutIndex].spokesman),50,0,150,150);
        ctx.context.font = font;
        ctx.context.fillStyle =fontColor;
        ctx.context.fillText(gut.talks[gutIndex].talk,120,180);
        return ctx.canvas;
    };
    var next=function(){
        if(gutIndex<gut.talks.length-1){
            gutIndex++;
            return true;
        }else{
            return false;
        }
    }
    return {
        face:face,
        init:init,
        render:render,
        next:next
    };
});