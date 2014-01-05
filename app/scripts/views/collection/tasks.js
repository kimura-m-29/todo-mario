define([
    'backbone',
    'views/item/task'
],
    function (Backbone, Task) {
        'use strict';

        /* Return a ItemView class definition */
        return Backbone.Marionette.CollectionView.extend({
            itemView: Task,
            tagName: 'ul'
        });
    });
