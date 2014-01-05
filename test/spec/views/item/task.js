(function() {
	'use strict';

	var root = this;

	root.define([
		'views/item/task'
		],
		function( Task ) {

			describe('Task Itemview', function () {

				it('should be an instance of Task Itemview', function () {
					var task = new Task();
					expect( task ).to.be.an.instanceof( Task );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );