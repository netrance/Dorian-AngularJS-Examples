// Defines NgBindHtmlController controller of a module lee.dorian.ng.HelloWorld
angular.module(
	"lee.dorian.ng.NgChangeText", []
).controller("NgChangeTextController", [
    // Refer to - https://www.w3schools.com/angular/angular_scopes.asp
    "$scope",

    // This method is called when its controller is defined.
    function ($scope) {
        $scope.id = "";

        // This method will be called when one of the radio buttons is clicked.
        $scope.validateId = function () {
            var divResultOfIdValidation = document.getElementById("id_div_result_of_id_validation");
            if (0 == $scope.id.length) {
                divResultOfIdValidation.innerHTML = "Please input an ID.";
            }
            else if (4 > $scope.id.length) {
                divResultOfIdValidation.innerHTML = "The ID is too short.";
            }
            else if (15 < $scope.id.length) {
                divResultOfIdValidation.innerHTML = "The ID is too long.";
            }
            else {
                divResultOfIdValidation.innerHTML = "The ID is usable.";
            }
        };

        $scope.validateId($scope.id);
    }
]);



