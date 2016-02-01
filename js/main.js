/**
 * 引导页面
 */

// 背景图片缓存
var bgReady = false;
var bgImage = new Image();
bgImage.onload = function () {
    bgReady = true;
};
bgImage.src = 'images/main/bg.jpg';

// 渲染对象
var render = function () {
   if (bgReady) {
       getStage().drawImage(bgImage, 0, 0, 1000, 1000);
    }
}

// The main game loop
var main = function () {
    render();
    requestAnimationFrame(main);
};
main();
