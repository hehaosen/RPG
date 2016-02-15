require.config({paths:{
    "lead":"lead"
}});
require(['lead'],function(lead){
    alert(lead.main(1,1));
});