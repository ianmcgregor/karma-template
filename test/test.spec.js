define(
	[],
	function() {

		'use strict';

		describe('a failing test', function() {
			beforeEach(function() {
			});
			afterEach(function() {
			});

			it('should fail', function() {
				expect(true).to.be.false;
			});
		});
});