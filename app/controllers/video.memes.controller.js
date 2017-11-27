define(function () {
    return ["$scope", "memesService", function($scope, memesService) {
        $scope.chosenMeme = {};

        $scope.listing = {
            showMemes: true,
            showVideoMeme: false
        };

        $scope.onMemeClick = function(meme) {
            $scope.chosenMeme = meme;
            $scope.listing.showMemes = false;
            $scope.listing.showVideoMeme = true;
        }

        memesService.getAllVideoMemes().then(memes => {
            $scope.memes = memes;
        });
    }];
});