define(["app/services/memes.service.js"], function (memesService) {
    var moduleName = "services";

    require(["angular"], function (angular) {
        var servicesModule = angular.module(moduleName, [])
            .service("memesService", memesService);
    });

    return moduleName;
});