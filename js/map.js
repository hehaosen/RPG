define(['util'], function (util) {
    var ctx;
    var map;
    var url = 'images/public/map.png';
    var size =32;
    var stone=[[1,0],[2,0]];//标记哪个地图块精灵是不能移动上去的
    var init = function (mapIn) {
        ctx=util.CTX(600,600);
        map=mapIn;
        util.R.load(url);
    };

    var setMap=function(mapIn){
        map=mapIn;
    }
    var renderBlock = function (which,where) {
        ctx.context.drawImage(util.R.get(url),
            which[1]*size,which[0]*size,
            size,size,
            where[1]*size,(where[0])*size,
            size,size);
    }
    var reload=function(){
        for(var i=0;i<map.length;i++){
            for(var j=0;j<map[i].length;j++){
                renderBlock(map[i][j],[i,j]);
            }
        }
    }

    var render=function(){
        return ctx.canvas;
    }
    var getSourceImage=function(){
        return util.R.get(url);
    }
    var isMeetStone=function(mapBlock){
        for(var i in stone){
            if(mapBlock[0]==stone[i][0]&&mapBlock[1]==stone[i][1]){
                return true;
            }
        }
            return false;
    }
    return{
        getSourceImage:getSourceImage,
        setMap:setMap,
        init:init,
        isMeetStone:isMeetStone,
        reload:reload,
        render:render
    }
});