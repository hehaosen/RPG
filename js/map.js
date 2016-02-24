define(['util'], function (util) {
    var ctx;
    var map;
    var url = 'images/public/map.png';
    var size =23;
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
    return{
        getSourceImage:getSourceImage,
        setMap:setMap,
        init:init,
        reload:reload,
        render:render
    }
});