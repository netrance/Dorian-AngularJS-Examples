angular.module(
    'lee.dorian.ng.ExTrustHtml',
    ['lee.dorian.ng.TrustHtmlService']
).controller('ExController', [
    '$scope',
    '$sce',
    'TrustHtmlService',
    function ($scope, $sce, TrustHtmlService) {

        // HTTP address as data
        $scope.httpUrl = "http://netrance.cafe24.com";

        // an iframe tag as a string
        $scope.iframeTag = TrustHtmlService.createIframeTagAsString($scope.httpUrl);

        $scope.open = function () {
            $scope.iframeTag = TrustHtmlService.createIframeTagAsString($scope.httpUrl);
        };
    }
]);



