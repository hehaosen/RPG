require(['story','menu','day1','game1','mapEdit'],function(story,menu,day1,game1,mapEdit){
    story.Renderer.loadCanvas(document.getElementById('stage').getContext("2d"));
    menu.init({
        story:story,
        items: [{
            text: '新的开始', click: function () {
                menu.stop();
                menu.fadeout(function () {
                    day1.init({
                        story:story,
                        whenEnding:function(){
                            game1.init({
                                story:story,
                                whenEnding:function(){
                                    console.log("game1 ending");
                                }
                            });
                            story.Scenes.Play("game1");
                        }
                    });
                    story.Scenes.Play("day1");
                });
            }
        }, {
            text: '旧的回忆', click: function () {
                console.log("旧的回忆");
            }
        },{
            text: '地图编辑器', click: function () {
                mapEdit.init({
                    story:story,
                    whenEnding:function(){
                        console.log("mapedit ending");
                    }
                });
                story.Scenes.Play('mapedit');
            }
        }]
    });
    story.Scenes.Add({name:'menu',scene:menu});
    story.Scenes.Add({name:'game1',scene:game1});
    story.Scenes.Add({name:'day1',scene:day1});
    story.Scenes.Add({name:'mapedit',scene:mapEdit});

    story.Renderer.start({FPS:10});
});