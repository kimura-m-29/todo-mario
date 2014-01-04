(function() {
	'use strict';

	var root = this;

	root.define([
		'models/task'
		],
		function( Task ) {

			describe('Task Model', function () {

				it('should be an instance of Task Model', function () {
					var task = new Task();
					expect( task ).to.be.an.instanceof( Task );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );