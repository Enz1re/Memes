define(function () {
    return ["$http", function($http) {
        return {
            getAllTextMemes: function() {
                return $http({
                    method: "GET",
                    url: "/app/data/memes.json"
                }).then(function(index) {
                    return index.data.memes.texts;
                }).catch(function(err) {
                    console.log(err);
                });
            },

            getAllImageMemes: function() {
                return $http({
                    method: "GET",
                    url: "/app/data/memes.json"
                }).then(function(index) {
                    return index.data.memes.images;
                }).catch(function(err) {
                    console.log(err);
                });
            },

            getAllVideoMemes: function() {
                return $http({
                    method: "GET",
                    url: "/app/data/memes.json"
                }).then(function(index) {
                    return index.data.memes.videos;
                }).catch(function(err) {
                    console.log(err);
                });
            },

            getMemeInfo: function(desc, type) {
                
            }
        }
    }];
});