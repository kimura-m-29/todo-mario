(function() {
	'use strict';

	var root = this;

	root.define([
		'views/new_task'
		],
		function( NewTask ) {

			describe('NewTask View', function () {

				it('should be an instance of NewTask View', function () {
					var new_task = new NewTask();
					expect( new_task ).to.be.an.instanceof( NewTask );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );