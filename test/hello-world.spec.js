define(
	[
		'hello-world'
	],
	function(HelloWorld) {

		'use strict';

		describe('just checking', function() {
			it('should return Hello world', function() {
			  HelloWorld.sayHello().should.equal('Hello world');
			});
		});
});