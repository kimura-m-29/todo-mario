define([
    'backbone',
    'communicator',
    'views/new_task',
    'collections/tasks',
    'views/collection/tasks',
    'routers/tasks',
    'controllers/tasks'
],

    function (Backbone, Communicator, NewTaskView, TasksCollection, TaskCollectionView, TaskRouter, TaskController) {
        'use strict';

        var App = new Backbone.Marionette.Application();

        /* Add application regions here */
        App.addRegions({
            newTask: '#new-todo',
            tasks: '#tasks'
        });

        /* Add initializers here */
        App.addInitializer(function () {
            Communicator.mediator.trigger("APP:START");

            this.collection = new TasksCollection();
            this.collection.fetch();

            App.newTask.attachView(new NewTaskView({el: App.newTask.el, collection: this.collection}));
            App.tasks.show(new TaskCollectionView({collection: this.collection}));

            new TaskRouter({controller: new TaskController({collection: App.collection})});
            Backbone.history.start();
        });

        return App;
    });
