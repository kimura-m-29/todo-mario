define([
	'backbone'
],
function(Backbone){
    'use strict';

	return Backbone.Marionette.AppRouter.extend({
		/* Backbone routes hash */
        appRoutes: {
            'all': 'all',
            'finished': 'finished'
        }
	});
});
