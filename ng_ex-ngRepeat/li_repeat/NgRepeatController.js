// Defines NgShowController controller of a module lee.dorian.ng.NgModel
angular.module(
	"lee.dorian.ng.NgRepeat", []
).controller("NgRepeatController", [
    // Refer to - https://www.w3schools.com/angular/angular_scopes.asp
    "$scope",

    // This method is called when its controller is defined.
    constructNgRepeatController
]);

function constructNgRepeatController($scope) {
    // This property is an array including Asian country names.
    $scope.asianCountryNames = [
        "Armenia",
        "Bhutan",
        "China",
        "India",
        "Japan",
        "Kazakhstan",
        "Laos",
        "Malaysia",
        "Nepal",
        "Oman",
        "Pakistan",
        "Qatar",
        "South Korea",
        "Thailand",
        "Uzbekistan",
        "Vietnam",
        "Yemen"
    ];

    // This method will be called by a click event from Show button.
    $scope.showImage = function () {
        $scope.imageVisibility = true;
    };

    // This method will be called by a click event from Hide button.
    $scope.hideImage = function() {
        $scope.imageVisibility = false;
    };
}
