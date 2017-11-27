define(function () {
    return ["$scope", "memesService", function($scope, memesService) {
        $scope.chosenMeme = {};

        $scope.listing = {
            showMemes: true,
            showTextMeme: false,
        };

        $scope.onMemeClick = function(meme) {
            $scope.chosenMeme = meme;
            $scope.listing.showMemes = false;
            $scope.listing.showTextMeme = true;
        }

        memesService.getAllTextMemes().then(memes => {
            $scope.memes = memes;
        });
    }];
});