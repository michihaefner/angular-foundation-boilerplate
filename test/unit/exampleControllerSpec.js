define(['angular-mocks'], function() {
	describe('Testing ExampleController', function(){
		// load the controller's module
	    

	    var myApp, ExampleController, scope;

	    beforeEach(module('ngApp'));

	    // Initialize the controller and a mock scope
	    beforeEach(
	        inject(function ($rootScope, $controller) {
	        scope = $rootScope.$new();
	        ExampleController = $controller('ExampleController', { $scope:scope });
	    }));

    
 
        it('should print: Hello, Angular fanatic.', function() {
     
            expect(scope.text).toMatch("Hello, Angular fanatic.");
        });
    });

});