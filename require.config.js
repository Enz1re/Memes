require.config({
    baseUrl: "",
    paths: {
        "angular": "https://ajax.googleapis.com/ajax/libs/angularjs/1.6.6/angular.min",
        "ngAnimate": "https://code.angularjs.org/1.6.6/angular-animate.min",
        "ngTouch": "https://code.angularjs.org/1.6.6/angular-touch.min",
        "uiBootstrap": "content/ui-bootstrap-tpls-2.5.0.min"
    },
    shim: {
        "angular": {
            exports: "angular"
        },
        "ngAnimate": {
            deps: ["angular"],
            exports: "ngAnimate"
        },
        ngTouch: {
            deps: ["angular"],
            exports: "ngTouch"
        },
        "uiBootstrap": {
            deps: ["angular", "ngAnimate", "ngTouch"],
            exports: "uiBootstrap"
        }
    },
    deps: ["app/main-module"]
});