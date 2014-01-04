define([
    'backbone'
],
    function (Backbone) {
        'use strict';

        return Backbone.View.extend({
            el: '#new-todo',
            events: {
                'keypress': 'postTask'
            },
            initialize: function () {
                console.log("initialize a NewTask View");
            },
            postTask : function(event){
                if(event.keyCode === 13){
                    console.log('ENTERED!');
                }
            }
        });
    });
