// Defines NgRepeatTrController controller of a module lee.dorian.ng.NgRepeat
angular.module(
	"lee.dorian.ng.NgRepeat", []
).controller("NgRepeatTrController", [
    // Refer to - https://www.w3schools.com/angular/angular_scopes.asp
    "$scope",

    // This method is called when its controller is defined.
    constructNgRepeatTrController
]);

function constructNgRepeatTrController($scope) {
    // This property is an array including Asian country names.
    $scope.notiItems = [
        {
            number: 1,
            title: "New Example: ng-repeat Directive",
            date: "May/20/2017"
        },
        {
            number: 2,
            title: "New Example: ng-show Directive",
            date: "May/19/2017"
        },
        {
            number: 3,
            title: "New Example: ng-model Directive",
            date: "May/16/2017"
        }
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
