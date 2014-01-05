(function() {
	'use strict';

	var root = this;

	root.define([
		'routers/tasks'
		],
		function( Tasks ) {

			describe('Tasks Router', function () {

				it('should be an instance of Tasks Router', function () {
					var tasks = new Tasks();
					expect( tasks ).to.be.an.instanceof( Tasks );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );