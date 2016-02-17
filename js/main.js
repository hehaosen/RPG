require(['story','menu','day1'],function(story,menu,day1){
    story.Renderer.loadCanvas(document.getElementById('stage').getContext("2d"));
    menu.init({
        story:story,
        items: [{
            text: '新的开始', click: function () {
                menu.stop();
                menu.fadeout(function () {
                    story.Scenes.Play("day1");
                });
            }
        }, {
            text: '旧的回忆', click: function () {
                console.log("旧的回忆");
            }
        }, {
            text: '我是什么鬼', click: function () {
                console.log("进入我是什么鬼");
            }
        }]
    });
    day1.init({
        story:story
    });
    story.Scenes.Add({name:'menu',scene:menu});
    story.Scenes.Add({name:'day1',scene:day1});
    story.Renderer.start({FPS:10});
});