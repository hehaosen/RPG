/**
 * 引导页面
 */
var lead = function () {
    // 背景图片缓存
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
            getStage().drawImage(bgImage, 0, 0, 600, 600);
            getStage().font = "30px 微软雅黑";
            getStage().fillStyle = "red";

            if(choseMenu % 2 == 0) {
                getStage().fillText("新的开始", 250, 300);
                getStage().fillText("旧的回忆←", 250, 400);
            } else {
                getStage().fillText("新的开始←", 250, 300);
                getStage().fillText("旧的回忆", 250, 400);
            }
        }

        if (over == 1) {
            getStage().fillStyle = 'rgba(181, 25, 25, ' + (alpha++) / 100 + ')';  //填充的颜色
            getStage().linewidth = 10;  //边框宽
            getStage().fillRect(0, 0, 600, 600);  //填充颜色 x y坐标 宽 高
        }

    }

    //按键监控
    addEventListener("keydown", function (e) {

        if (e.keyCode == 38) {choseMenu ++} //上

        if (e.keyCode == 40) {choseMenu --} //下

        //回车 or 空格
        if (e.keyCode == 13  || e.keyCode == 32) {
            choseMenu % 2 == 0 ? over = 2 : over = 1;
        }

    }, false);


    // 主刷新进程
    var main = function () {
        render();
        if (alpha <= 100) {
            requestAnimationFrame(main);
        } else {
            createJS('day1');
        }
    };
    main();
}();

