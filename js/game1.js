define(['util', 'map', 'hero'], function (util, map, hero) {
    var $;
    var flushFlag = false;
    var heroX;
    var heroY;
    var heroSpeed = 32;
    var renderSpeed=10;
    var heroGhostX;
    var heroGhostY;
    var c = 12;
    var heroGo="down";
    var oldHeroGo="down";
    var mapMap = [[[0, 0], [0, 0], [1, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], [[0, 0], [0, 0], [2, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], [[0, 0], [0, 0], [1, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], [[0, 0], [0, 0], [2, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], [[0, 0], [0, 0], [1, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], [[0, 0], [0, 0], [2, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], [[0, 0], [0, 0], [1, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], [[0, 0], [0, 0], [2, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]]];
    var init = function (config) {
        $ = config.story.Renderer.getCanvas();
        map.init(mapMap);
        hero.init();
        util.R.onReady(function () {
            heroX = 0;
            heroY = 0;
            heroGhostX = 0;
            heroGhostY = 0;
            map.reload();
            hero.reload();
            whenEnding = config.whenEnding;
            flushFlag = true;
        });
    };
    var listener = function () {
        util.setListener(function (type) {
                var oldX = heroX;
                var oldY = heroY;
                switch (type) {
                    case "enter":
                        break;
                    case "down":
                        if ((Math.abs(heroY - heroGhostY) < heroSpeed)) {
                            oldHeroGo=heroGo;
                            heroY += heroSpeed;
                            heroGo="down";
                        }
                        //hero.go(type);
                        break;
                    case "up":
                        if ((Math.abs(heroY - heroGhostY) < heroSpeed)) {
                            oldHeroGo=heroGo;
                            heroY -= heroSpeed;
                            heroGo="up";
                        }
                        //hero.go(type);
                        break;
                    case "right":
                        if ((Math.abs(heroX - heroGhostX) < heroSpeed))  {
                            oldHeroGo=heroGo;
                            heroX += heroSpeed;
                            heroGo="right";
                        }
                        //hero.go(type);
                        break;
                    case "left":
                        if ((Math.abs(heroX - heroGhostX) < heroSpeed)){
                            oldHeroGo=heroGo;
                            heroX -= heroSpeed;
                            heroGo="left";
                        }
                        //hero.go(type);
                        break;
                    case "keyup":
                        hero.go("stop down");
                        break;
                }
                if (map.isMeetStone(mapMap[heroY / heroSpeed][heroX / heroSpeed])) {//如果碰到障碍物
                    heroX = oldX;
                    heroY = oldY;
                    hero.go("stop " + type);
                }
                flushFlag = true;
        });

    }
    var render = function () {
        if (flushFlag) {
            if (!(heroX == heroGhostX && heroY == heroGhostY)) {
                // console.log(heroX,heroY,heroGhostX,heroGhostY);
               if(oldHeroGo=="up"||oldHeroGo=="down"){
                   if (heroGhostY > heroY) {
                       hero.go("up");
                       heroGhostY -= renderSpeed;
                       if (heroGhostY <= heroY) {
                           heroGhostY = heroY;
                           hero.go("stop up");
                       }
                   } else if (heroGhostY < heroY) {
                       hero.go("down");
                       heroGhostY += renderSpeed;
                       if (heroGhostY >= heroY) {
                           heroGhostY = heroY;
                           hero.go("stop down");
                       }
                   } else if (heroGhostX > heroX) {
                       hero.go("left");
                       heroGhostX -= renderSpeed;
                       if (heroGhostX <= heroX) {
                           heroGhostX = heroX;
                           hero.go("stop left");
                       }
                   } else if (heroGhostX < heroX) {
                       hero.go("right");
                       heroGhostX += renderSpeed;
                       if (heroGhostX >= heroX) {
                           heroGhostX = heroX;
                           hero.go("stop right");
                       }
                   }
               }else if(oldHeroGo=="left"||oldHeroGo=="right"){
                   if (heroGhostX > heroX) {
                       hero.go("left");
                       heroGhostX -= renderSpeed;
                       if (heroGhostX <= heroX) {
                           heroGhostX = heroX;
                           hero.go("stop left");
                       }
                   } else if (heroGhostX < heroX) {
                       hero.go("right");
                       heroGhostX += renderSpeed;
                       if (heroGhostX >= heroX) {
                           heroGhostX = heroX;
                           hero.go("stop right");
                       }
                   } else if (heroGhostY > heroY) {
                       hero.go("up");
                       heroGhostY -= renderSpeed;
                       if (heroGhostY <= heroY) {
                           heroGhostY = heroY;
                           hero.go("stop up");
                       }
                   } else if (heroGhostY < heroY) {
                       hero.go("down");
                       heroGhostY += renderSpeed;
                       if (heroGhostY >= heroY) {
                           heroGhostY = heroY;
                           hero.go("stop down");
                       }
                   }
               }
                $.drawImage(map.render(), 0, 0);
                $.drawImage(hero.render(), heroGhostX, heroGhostY - c);
            } else {
                $.drawImage(map.render(), 0, 0);
                $.drawImage(hero.render(), heroGhostX, heroGhostY - c);
                flushFlag = false;
            }
        }

    };
    var stop = function () {
        //base.RemoveListenerKeyBoard();
    };
    return {
        listener: listener,
        init: init,//three two one action!!!
        stop: stop,//
        render: render
    };
});