// Defines NgModelController controller of a module lee.dorian.ng.NgModel
angular.module(
	"lee.dorian.ng.NgModel", []
).controller("NgModelController", [
    // Refer to - https://www.w3schools.com/angular/angular_scopes.asp
    "$scope",

    // This method is called when its controller is defined.
    constructNgModelController
]);

function constructNgModelController($scope) {
    // id property is binded to a input element of a view.
    $scope.id = "";

    // password property is also binded to another input element of a view.
    $scope.password = "";

    // This method will be called by a click event from a button.
    $scope.signIn = function () {
        if ($scope.id != "dorian") {
            alert("Invalid ID.");
            return;
        }
        else if ($scope.password != "abcd1234") {
            alert("Invalid password");
            return;
        }
        else {
            location.replace("my-page.html");
        }
    };
}
