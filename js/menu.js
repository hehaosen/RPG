define(['base', 'canvas'], function (base, $) {
    var current = 0;
    var items =[];
    var top = 300;
    var left = 250;
    var height = 600;
    var width = 600;
    var bgImage = new Image();
    var background = 'images/main/bg.jpg';
    var font = "30px 微软雅黑";
    var fillStyle = "red";
    var flushFlag = false;
    var stepY = 100;
    base.AddListenerKeyBoard();
    base.Event.on("up", function () {
        current++
        flushFlag = true;
    });
    base.Event.on("down", function () {
        current--
        flushFlag = true;
    });
    base.Event.on("enter", function () {
        items[Math.abs((current) % items.length)].click();
    });
    var init = function (Items) {
        items=Items;
        bgImage.src = background;
        bgImage.onload = function () {
            flushFlag = true;
        };
    }
    var renderBackground = function () {
        $.drawImage(bgImage, 0, 0, width, height);
        $.font = font;
        $.fillStyle = fillStyle;
    }
    var renderMenu = function () {
        for (i = 0; i < items.length; i++) {
            if (i == Math.abs((current) % items.length)) {
                $.fillText(items[i].text + "←", left, top + i * stepY);
            } else {
                $.fillText(items[i].text, left, top + i * stepY);
            }
        }
    }
    var render = function () {
        if (flushFlag == true) {
            renderBackground();
            renderMenu();
            flushFlag = false;
        }
    }
    return {
        init: init,
        render: render
    };
});