app.controller("ctrl2", function($scope) {
    console.log("hhhhhhh")
    $scope.lastname = "Shihab"
  });
app.controller("ctrl1", function($scope) {
    $scope.firstname = "Raed"
    $scope.sendDataToServer = function(para) {
        console.log(para)
    }
  });
