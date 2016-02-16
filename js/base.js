define(['util'],function ($) {
    var AddListenerKeyBoard=function(){
        $.KeyBoard.AddListener(this.Event);
    };
    var Event={
        _listeners: {},
        on: function(type, fn) {
            if (typeof this._listeners[type] === "undefined") {
                this._listeners[type] = [];
            }
            if (typeof fn === "function") {
                this._listeners[type].push(fn);
            }
            return this;
        },
        fire: function(type) {
            var arrayEvent = this._listeners[type];
            if (arrayEvent instanceof Array) {
                for (var i=0, length=arrayEvent.length; i<length; i+=1) {
                    if (typeof arrayEvent[i] === "function") {
                        arrayEvent[i]({
                            type: type
                        });
                    }
                }
            }
            return this;
        },
        unfire: function(type, fn) {
            var arrayEvent = this._listeners[type];
            if (typeof type === "string" && arrayEvent instanceof Array) {
                if (typeof fn === "function") {
                    for (var i=0, length=arrayEvent.length; i<length; i+=1){
                        if (arrayEvent[i] === fn){
                            this._listeners[type].splice(i, 1);
                            break;
                        }
                    }
                } else {
                    delete this._listeners[type];
                }
            }
            return this;
        }
    };
    return {
        AddListenerKeyBoard:AddListenerKeyBoard,
        Event:Event
    };
});