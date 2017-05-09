// Defines NgClickController controller of a module lee.dorian.ng.NgClick
angular.module(
	"lee.dorian.ng.NgClick", []
).controller("NgClickController", [
    // Refer to - https://www.w3schools.com/angular/angular_scopes.asp
    "$scope",

    // This method is called when its controller is defined.
    function ($scope) {
        $scope.greetingMessage = "Hello, world.";

        // This method will be called by a click event from Greet button.
        $scope.alertGreetingMessage = function () {
        	alert($scope.greetingMessage);
        };
    }
]);



