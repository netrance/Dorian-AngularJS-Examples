// Defines HelloWorldController controller of a module lee.dorian.ng.HelloWorld
angular.module(
    "lee.dorian.ng.HelloWorld",
    []
).controller("HelloWorldController", [
    // Refer to - https://www.w3schools.com/angular/angular_scopes.asp
    "$scope",

    // This method is called when its controller is defined.
    function ($scope) {
        // This property will be read by a view,
        // which is a DOM object of HelloWorld.html.
        $scope.greetingMessage = "Hello, world.";
    }
]);



