define(["app/controllers/main.controller",
        "app/controllers/text.memes.controller",
        "app/controllers/image.memes.controller",
        "app/controllers/video.memes.controller"], function (mainController, textController, imageController, videoController) {
    var moduleName = "controllers";

    require(["angular"], function (angular) {
        angular.module(moduleName, [])
            .controller("MainController", mainController)
            .controller("TextController", textController)
            .controller("ImageController", imageController)
            .controller("VideoController", videoController);
    });

    return moduleName;
});