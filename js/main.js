require(['story','menu','day1','game1'],function(story,menu,day1,game1){
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
        }]
    });
    day1.init({
        story:story,
        whenEnding:function(){
            story.Scenes.Play("game1");
        }
    });
    game1.init({
        story:story,
        whenEnding:function(){
            console.log("game1 ending");
        }
    });

    story.Scenes.Add({name:'menu',scene:menu});
    story.Scenes.Add({name:'day1',scene:day1});
    story.Scenes.Add({name:'game1',scene:game1});
    story.Renderer.start({FPS:10});
});