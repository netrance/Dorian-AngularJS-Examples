// Defines SampleController controller of a module lee.dorian.ng.NgModel
angular.module(
	"RootScopeExample", []
).run(
    initializeRootScopeExample
).controller("SampleController", [
    // Refer to - https://www.w3schools.com/angular/angular_scopes.asp
    "$scope",

    // This method is called when its controller is defined.
    constructSampleController
]);

function initializeRootScopeExample($rootScope) {
    $rootScope.userInfo = {
        id: "id_dorian",
        name: "Dorian",
        score: 10000
    };
}

function constructSampleController($scope) {
    
}
