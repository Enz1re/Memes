requirejs([
    "angular",
    "uiBootstrap",
    "app/directives/directives",
	"app/services/services",
    "app/controllers/controllers"], function (angular, uiBootstrap, directives, services, controllers) {
    angular.module("meschan", ["ui.bootstrap", directives, services, controllers]);

    angular.element(document).ready(function () {
        angular.bootstrap(document.documentElement, ["meschan"]);
    });
});