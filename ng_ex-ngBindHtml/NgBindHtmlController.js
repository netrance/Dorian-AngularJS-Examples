// Defines NgBindHtmlController controller of a module lee.dorian.ng.HelloWorld
angular.module("lee.dorian.ng.NgBindHtml", [
    "ngSanitize"
]).controller("NgBindHtmlController", [
    // Refer to - https://www.w3schools.com/angular/angular_scopes.asp
    "$scope",

    // This method is called when its controller is defined.
    function ($scope) {
        // This property will be read by a view,
        // which is a DOM object of ex-ngBindHtml.html.
        $scope.greetingMessage = "Hello, <b>world</b>.";
    }
]);



