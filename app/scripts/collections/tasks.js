define([
    'backbone',
    'models/task'
],
    function (Backbone, Task) {
        'use strict';

        /* Return a collection class definition */
        return Backbone.Collection.extend({
            url: "/api/v1/tasks",
            model: Task
        });
    });
