define(['util','base'],function ($,base) {
    var main = function () {
        var bgReady = false;
        var bgImage = new Image();
        bgImage.onload = function () {
            bgReady = true;
        };
        bgImage.src = 'images/main/bg.jpg';
        var choseMenu = 1;
        var over = 0; // 0 未选择 1.新的开始 2.旧的回忆
        var alpha = 0;

        // 渲染对象
        var render = function () {

            if (bgReady) {
                $.g().drawImage(bgImage, 0, 0, 600, 600);
                $.g().font = "30px 微软雅黑";
                $.g().fillStyle = "red";

                if (choseMenu % 2 == 0) {
                    $.g().fillText("新的开始", 250, 300);
                    $.g().fillText("旧的回忆←", 250, 400);
                } else {
                    $.g().fillText("新的开始←", 250, 300);
                    $.g().fillText("旧的回忆", 250, 400);
                }
            }

            if (over == 1) {
                $.g().fillStyle = 'rgba(181, 25, 25, ' + (alpha++) / 100 + ')';  //填充的颜色
                $.g().linewidth = 10;  //边框宽
                $.g().fillRect(0, 0, 600, 600);  //填充颜色 x y坐标 宽 高
            }

        }

        // 主刷新进程
        var main = function () {
            render();
            if (alpha <= 100) {
                requestAnimationFrame(main);
            } else {
            }
        };
        base.AddListenerKeyBoard();
        base.Event.on("up", function () {
            choseMenu++
        });
        base.Event.on("down", function () {
            choseMenu--
        });
        base.Event.on("enter", function () {
            choseMenu % 2 == 0 ? over = 2 : over = 1;
        });
        main();
    }
    return {
        main: main
    };
});
//lead.js
//define(function(){
//    return {
//        lead:function () {
//
//            var bgReady = false;
//            var bgImage = new Image();
//            bgImage.onload = function () {
//                bgReady = true;
//            };
//            bgImage.src = 'images/main/bg.jpg';
//            var choseMenu = 1;
//            var over = 0; // 0 未选择 1.新的开始 2.旧的回忆
//            var alpha = 0;
//
//            // 渲染对象
//            var render = function () {
//                if (bgReady) {
//                    $().drawImage(bgImage, 0, 0, 600, 600);
//                    $().font = "30px 微软雅黑";
//                    $().fillStyle = "red";
//
//                    if(choseMenu % 2 == 0) {
//                        $().fillText("新的开始", 250, 300);
//                        $().fillText("旧的回忆←", 250, 400);
//                    } else {
//                        $().fillText("新的开始←", 250, 300);
//                        $().fillText("旧的回忆", 250, 400);
//                    }
//                }
//
//                if (over == 1) {
//                    $().fillStyle = 'rgba(181, 25, 25, ' + (alpha++) / 100 + ')';  //填充的颜色
//                    $().linewidth = 10;  //边框宽
//                    $().fillRect(0, 0, 600, 600);  //填充颜色 x y坐标 宽 高
//                }
//
//            }
//
//            // 主刷新进程
//            var main = function () {
//                render();
//                if (alpha <= 100) {
//                    requestAnimationFrame(main);
//                } else {
//
//                    createJS('day1');
//                }
//            };
//
//            KeyBoard.on("up",function(){
//                Controller.onUp();
//                choseMenu ++
//            });
//            KeyBoard.on("down",function(){
//                choseMenu --
//            });
//            KeyBoard.on("enter",function(){
//                choseMenu % 2 == 0 ? over = 2 : over = 1;
//            });
//            main();
//        }
//    }
//});


