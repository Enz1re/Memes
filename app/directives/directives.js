define(["app/directives/main.directive",
        "app/directives/text.memes.directive",
        "app/directives/video.memes.directive",
        "app/directives/image.memes.directive"], function (mainDirective, textDirective, videoDirective, imageDirective) {
    var moduleName = "directives";

    require(["angular"], function (angular) {
        var directivesModule = angular.module(moduleName, [])
            .directive("meschan", mainDirective)
            .directive("textMemes", textDirective)
            .directive("imageMemes", imageDirective)
            .directive("videoMemes", videoDirective);
    });
    
    return moduleName;
});