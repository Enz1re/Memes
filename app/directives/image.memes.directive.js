define(function () {
    return function() {
        return {
            restrict: "E",
            templateUrl: "app/layout/image-memes.html",
            controller: "ImageController",
            controllerAs: "imageCtrl",
            scope: {}
        };
    };
});