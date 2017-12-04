define(function () {
    return ["$scope", "memesService", function($scope, memesService) {
        $scope.chosenMeme = {};

        $scope.listing = {
            showMemes: true,
            showChosenMeme: false
        };

        $scope.onMemeClick = function(meme) {
            $scope.chosenMeme = meme;
            $scope.listing.showMemes = false;
            $scope.listing.showChosenMeme = true;
        }

        memesService.getAllImageMemes().then(memes => {
            $scope.memes = memes;
        });
    }];
});