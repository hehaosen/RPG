define(['util'], function (util) {
    var face='images/game1/naturo.png';
    var ctx;
    var sprite;
    var init = function () {
        ctx=util.CTX(200,200);
        util.R.load(face);
    };
    var height=48;
    var width=32;
    var reload=function(){
        sprite={
            left:util.Sprite(ctx.context,face,[0,2*height],[width,height],1,[0,1,2,3]),
            right:util.Sprite(ctx.context,face,[0,1*height],[width,height],1,[0,1,2,3]),
            up:util.Sprite(ctx.context,face,[0,3*height],[width,height],1,[0,1,2,3]),
            down:util.Sprite(ctx.context,face,[0,0*height],[width,height],1,[0,1,2,3])
        }
        sprite.down.update(0);
        sprite.down.render();
    }
    var go=function(type){
        ctx.context.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
        switch(type){
            case "down":
                sprite.down.update(1);
                sprite.down.render();
                break;
            case "up":
                sprite.up.update(1);
                sprite.up.render();
                break;
            case "right":
                sprite.left.update(1);
                sprite.left.render();
                break;
            case "left":
                sprite.right.update(1);
                sprite.right.render();
                break;
            case "stop":
                sprite.up.reset();
                sprite.left.reset();
                sprite.right.reset();
                sprite.down.reset();
                sprite.down.render();
                break;
        }

    }
    var render=function(){
        return ctx.canvas;
    }
    return {
        init:init,
        reload:reload,
        go:go,
        render:render
    };
});