angular.module(
    'lee.dorian.ng.TrustHtmlService',
    []
).factory('TrustHtmlService', [
    '$sce',
    function ($sce) {
        var service = {};
        
        // Creates a iframe tag as a string.
        // httpUrl - HTTP address to open a web page
        service.createIframeTagAsString = function (httpUrl) {
            return $sce.trustAsHtml("<iframe src='" + httpUrl + "' width='100%'></iframe>");
        };

        return service;
    }
]);