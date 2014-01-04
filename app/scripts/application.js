define([
	'backbone',
	'communicator',
    'views/new_task'
],

function( Backbone, Communicator, NewTaskView ) {
    'use strict';

	var App = new Backbone.Marionette.Application();

	/* Add application regions here */
	App.addRegions({
        newTask: '#new-todo'
    });

	/* Add initializers here */
	App.addInitializer( function () {
		Communicator.mediator.trigger("APP:START");
        App.newTask.attachView(new NewTaskView({el: App.newTask.el}));
	});

	return App;
});
