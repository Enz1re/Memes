define(function () {
    return ["$scope", "$sce", "memesService", function($scope, $sce, memesService) {
        $scope.chosenMeme = {};

        $scope.trustAsResourceUrl = $sce.trustAsResourceUrl;

        $scope.listing = {
            showMemes: true,
            showChosenMeme: false
        };

        $scope.onMemeClick = function(meme) {
            $scope.chosenMeme = meme;
            $scope.listing.showMemes = false;
            $scope.listing.showChosenMeme = true;
        }

        memesService.getAllVideoMemes().then(memes => {
            $scope.memes = memes;
        });
    }];
});