// Defines NgBindHtmlController controller of a module lee.dorian.ng.HelloWorld
angular.module(
	"lee.dorian.ng.NgChangeRadio", []
).controller("NgChangeRadioController", [
    // Refer to - https://www.w3schools.com/angular/angular_scopes.asp
    "$scope",

    // This method is called when its controller is defined.
    function ($scope) {
        // This method will be called when one of the radio buttons is clicked.
        $scope.changeBackgroundColor = function (color) {
            var body = (document.getElementsByTagName("BODY"))[0];
            body.style.backgroundColor = color;
        };
    }
]);



