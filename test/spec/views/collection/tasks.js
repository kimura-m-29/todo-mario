(function() {
	'use strict';

	var root = this;

	root.define([
		'views/collection/tasks'
		],
		function( Tasks ) {

			describe('Tasks Collectionview', function () {

				it('should be an instance of Tasks Collectionview', function () {
					var tasks = new Tasks();
					expect( tasks ).to.be.an.instanceof( Tasks );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );