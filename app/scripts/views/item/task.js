define([
    'backbone',
    'hbs!tmpl/item/task_tmpl'
],
    function (Backbone, TaskTmpl) {
        'use strict';

        /* Return a ItemView class definition */
        return Backbone.Marionette.ItemView.extend({
            tagName: 'li',
            className: 'tasklist_task',
            template: TaskTmpl,
            initialize: function () {
                this.changeFinishedStyle();
                this.model.on('sync', this.changeFinishedStyle, this);
            },
            /* Ui events hash */
            events: {
                'click': 'onClickTask'
            },
            onClickTask: function (event) {
                var $clickTarget = $(event.target);

                if($clickTarget.hasClass('js-removeTask')){
                    this.model.destroy();
                    return false;
                }

                if (this.model.get('finished')) {
                    this.model.save({'finished': false});
                } else {
                    this.model.save({'finished': true});
                }
            },
            changeFinishedStyle: function () {
                if (this.model.get('finished')) {
                    this.$el.attr('style', 'text-decoration: line-through;');
                } else {
                    this.$el.attr('style', 'text-decoration: none;');
                }
            }
        });
    });
