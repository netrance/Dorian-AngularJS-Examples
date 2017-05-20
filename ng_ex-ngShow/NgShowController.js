// Defines NgShowController controller of a module lee.dorian.ng.NgModel
angular.module(
	"lee.dorian.ng.NgShow", []
).controller("NgShowController", [
    // Refer to - https://www.w3schools.com/angular/angular_scopes.asp
    "$scope",

    // This method is called when its controller is defined.
    constructNgShowController
]);

function constructNgShowController($scope) {
    // This property is a flag to decide whether to show an image.
    $scope.imageVisibility = true;

    // This method will be called by a click event from Show button.
    $scope.showImage = function () {
        $scope.imageVisibility = true;
    };

    // This method will be called by a click event from Hide button.
    $scope.hideImage = function() {
        $scope.imageVisibility = false;
    };
}
