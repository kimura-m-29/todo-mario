define([
	'backbone'
],
function( Backbone ) {
    'use strict';

	return Backbone.Marionette.Controller.extend({

		initialize: function( options ) {
            this.collection = options.collection;
		},
        all : function(){
            this.collection.fetch();
        },
        finished : function(){
            this.collection.fetch({data:{conditions:'{"finished": true}'}});
        }
	});

});
